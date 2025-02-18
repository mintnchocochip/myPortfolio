import { useEffect } from 'react'

export const useSmoothScroll = (
  containerRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true
      }

      clearTimeout(scrollTimeout)

      scrollTimeout = setTimeout(() => {
        isScrolling = false

        const scrollTop = container.scrollTop
        const itemHeight = 64

        const snapPoint = Math.round(scrollTop / itemHeight) * itemHeight

        container.scrollTo({
          top: snapPoint,
          behavior: 'smooth'
        })
      }, 100)
    }

    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [containerRef])
}
