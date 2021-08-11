import React, { Children } from 'react'

import { useState } from 'react'

import { Menu } from 'antd';

import { menuList } from './header'

export default function Header() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState('idnex')

  const [skinTitle, setSkinTitle] = useState('换肤')

  const skinList = menuList.filter(menu => menu.key === 'skin' && menu.children)[0].children

  const handleClick = ({ key }:any) => {
    setCurrent(key)
    setSkinTitle(getSkinTitle(key))
  }

  const getSkinTitle = (key:string):string => {
    return ''
  }
  
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {
        menuList.map(({key, title, children}) => (
          children
          ? <SubMenu key={key} title={key === 'skin'? skinTitle : title}>
            {
              children.map(({title, children}) => {
                return (
                  <Menu.ItemGroup title={title} key={title}>
                    {
                      children.map(({key, title}) => <Menu.Item key={key}>{title}</Menu.Item>)
                    }
                  </Menu.ItemGroup>
                )
              })
            }
          </SubMenu>
          : <Menu.Item key={key}>{title}</Menu.Item>
        ))
      }
    </Menu>
  )
}
