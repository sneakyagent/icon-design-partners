import { useState, useEffect } from 'react'

export function useIsMobile(bp = 768) {
  const [mobile, setMobile] = useState(() => window.innerWidth <= bp)
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth <= bp)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [bp])
  return mobile
}
