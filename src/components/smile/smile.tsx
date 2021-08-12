import { useRef, useEffect } from 'react'

export default function Smile() {
  const canvas:any = useRef<any>(null)
  const draw = () => {
    let ctx = canvas.current.getContext('2d')    

    ctx.beginPath()

    ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
    ctx.moveTo(110, 75)

    ctx.arc(75, 75, 35, 0, Math.PI, false)
    ctx.moveTo(65, 65)

    ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
    ctx.moveTo(95, 65)

    ctx.arc(90, 65, 5, 0, Math.PI * 2, true)

    ctx.stroke()
  }
  useEffect(() => {
    draw()
  }, )

  return (
    <canvas ref={canvas} height="80"/>
  )
}
