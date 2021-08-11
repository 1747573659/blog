import { useState, useEffect, useRef, useCallback } from 'react';

import Background1 from '@/assets/卡通人物.jpg'
import Background2 from '@/assets/带土vs卡卡西.jpg'
import Background3 from '@/assets/烟.jpg'

export default function useBackgroundColor() {
  const backgroundList = [Background1, Background2, Background3]

  const [backGroundImage, setBackGroundImage] = useState(backgroundList[1])

  let intervalRef:any = useRef()
  let index = 0
  const timerCallback = useCallback(() => {
    intervalRef.current = setInterval(() => {
      index < 2 ? ++index : index = 0
      setBackGroundImage(backgroundList[index])
    }, 5000)
  }, [])
  useEffect(() => {
    timerCallback()
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [timerCallback])
  const wrapperStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${backGroundImage})`,
    backgroundSize: 'cover'
  }

  return wrapperStyle
}
