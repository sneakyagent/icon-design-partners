import { useState, useEffect, useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

export function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const mobile = useIsMobile()

  useEffect(() => {
    if (mobile) return
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }
    const over = (e) => setHovered(!!e.target.closest('a, button, [data-hover]'))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [mobile])

  if (mobile) return null

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hovered ? 'cursor-dot--hover' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovered ? 'cursor-ring--hover' : ''}`}
      />
    </>
  )
}
