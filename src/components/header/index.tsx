import './headerStyle.css'

import { useState } from 'react'

import { Menu } from 'antd';

import { menuList } from './header'

import Smile from '../smile/smile'

export default function Header() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState('idnex')

  const [skinTitle, setSkinTitle] = useState('风格主题')

  const skinList = menuList.filter(menu => menu.key === 'skin' && menu.children)[0].children

  const handleClick = ({ key }:any) => {
    setCurrent(key)
    getSkinTitle(key)
  }

  const getSkinTitle = (key:string):void => {
    skinList?.forEach(({title, children}) => {
      children.forEach(({title:skinTitle, key:skinKey}) => {
        if (key === skinKey) setSkinTitle(title + '-' + skinTitle)
      })
    })
  }
  
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="header-wraper">
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
        <Smile></Smile>
      </Menu>
    </div>
  )
}
