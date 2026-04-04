import { useEffect, useRef } from "react"

export const SpeckledBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      drawSpeckles()
    }

    const drawSpeckles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const area = canvas.width * canvas.height
      const numSpeckles = Math.floor(area / 1800)
      
      for (let i = 0; i < numSpeckles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        
        const size = Math.random() * 2 + 0.2
        
        const opacity = Math.random() * 0.4 + 0.1
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`
        ctx.fill()
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}