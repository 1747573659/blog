import React from 'react'
import { useState, useEffect } from 'react';

import Background1 from '@/assets/卡通人物.jpg'
import Background2 from '@/assets/带土vs卡卡西.jpg'
import Background3 from '@/assets/烟.jpg'

export default function useBackgroundColor() {
  const backgroundList = [Background1, Background2, Background3]

  const [backGroundImage, setBackGroundImage] = useState(backgroundList[1])
  let index = 1
  useEffect(() => {
    let timer = setInterval(() => {
      index < 2 ? index++ : index = 0
      setBackGroundImage(backgroundList[index])
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  const wrapperStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${backGroundImage})`,
    backgroundSize: 'cover'
  }

  return wrapperStyle
}
