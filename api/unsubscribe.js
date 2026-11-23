// Public one-click unsubscribe for Icon Design Partners cold outreach.
//
// Lives on Vercel (not the laptop) so the link in an email sent months ago still
// works at 11pm on a Sunday. Writes to Supabase; the outreach engine pulls this
// list before every send.
//
// The address is signed, not plain: ?u=<base64url(email)>&s=<hmac>. Without the
// signature anyone could unsubscribe anyone by editing the query string.
import { createHmac, timingSafeEqual } from 'node:crypto'

const SECRET = process.env.UNSUB_SECRET || ''
const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/$/, '')
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || ''

const b64urlDecode = (s) =>
  Buffer.from(String(s).replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')

export function sign(email, secret = SECRET) {
  return createHmac('sha256', secret).update(email.trim().toLowerCase()).digest('hex').slice(0, 32)
}

function signatureValid(email, given) {
  if (!SECRET || !given) return false
  const expected = sign(email)
  if (expected.length !== given.length) return false
  return timingSafeEqual(Buffer.from(expected), Buffer.from(given))
}

async function recordUnsubscribe(email, meta) {
  if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error('Supabase not configured')
  const res = await fetch(`${SUPABASE_URL}/rest/v1/unsubscribes`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      // Idempotent: clicking twice must not 409.
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify({ email: email.trim().toLowerCase(), source: meta.source, user_agent: meta.ua }),
  })
  if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text().catch(() => '')}`)
}

function page({ heading, body, ok = true }) {
  return `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>${heading}</title>
<style>
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#f6f8fb;color:#172033;
       display:grid;place-items:center;min-height:100vh;margin:0;text-align:center;padding:24px}
  .c{max-width:440px;padding:32px;background:#fff;border:1px solid #dde4ee;border-radius:12px;
     box-shadow:0 18px 45px rgba(23,32,51,.07)}
  h1{margin:0 0 12px;font-size:22px;color:${ok ? '#1a7f52' : '#b4443a'}}
  p{margin:0;line-height:1.6;color:#4a5568;font-size:15px}
  .f{margin-top:22px;padding-top:18px;border-top:1px solid #eef1f6;font-size:13px;color:#94a1b2}
  a{color:#4a5568}
</style></head><body><div class="c">
<h1>${heading}</h1><p>${body}</p>
<div class="f">Icon Design Partners &middot; Denver, CO</div>
</div></body></html>`
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // Never let this get cached by a mail proxy and replayed.
  res.setHeader('Cache-Control', 'no-store')

  const { u, s } = req.query || {}

  // Gmail/Outlook one-click sends POST with List-Unsubscribe=One-Click; a human
  // clicking the footer link sends GET. Both must work.
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).send(page({ heading: 'Method not allowed', body: 'Try the link in your email again.', ok: false }))
    return
  }

  let email = ''
  try {
    email = b64urlDecode(u || '')
  } catch {
    email = ''
  }

  if (!email || !email.includes('@') || !signatureValid(email, String(s || ''))) {
    res.status(400).send(page({
      heading: "That link didn't work",
      body: 'It may have been truncated by your email client. Reply to the message with "unsubscribe" and I\'ll remove you by hand.',
      ok: false,
    }))
    return
  }

  try {
    await recordUnsubscribe(email, { source: 'link', ua: String(req.headers['user-agent'] || '').slice(0, 300) })
  } catch (err) {
    console.error('unsubscribe write failed:', err.message)
    res.status(500).send(page({
      heading: 'Something went wrong',
      body: 'I couldn\'t record that just now. Reply to the email with "unsubscribe" and I\'ll take care of it.',
      ok: false,
    }))
    return
  }

  res.status(200).send(page({
    heading: "You're unsubscribed",
    body: `<strong>${email.replace(/[&<>"]/g, '')}</strong> has been removed. You won't hear from me again.`,
  }))
}
