import { FC } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import './login.css'

import useBackgroundColor from './useBackgroundColor'

const Login: FC = () => {

  const wrapperStyle = useBackgroundColor()

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
