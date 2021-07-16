import React, { FC, useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import './login.css'

import Background1 from '@/assets/卡通人物.jpg'
import Background2 from '@/assets/带土vs卡卡西.jpg'
import Background3 from '@/assets/烟.jpg'

const Login: FC = () => {

  // 定义一个背景轮播图的列表
  const backgroundList = [Background1, Background2, Background3]

  // 声明一个 backGroundImage 的state变量
  const [backGroundImage, setBackGroundImage] = useState(backgroundList[1])
  let index = 1
  let backgroundTimer
  useEffect(() => {
    // setInterval(() => {
    //   index < 2 ? index++ : index = 0
    //   setBackGroundImage(backgroundList[index])
    // }, 1000)
  })

  const wrapperStyle = {
    width: "100vw",
    height: "100vh",
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${backGroundImage})`,
    backgroundSize: 'cover'
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div style={wrapperStyle} className="login-wrapper">
      <div className="login-box">
        <Form name='basic' labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item label='用户名' name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label='密码' name='password' rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
