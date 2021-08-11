import HomeContent from './homeContent'

import { Link, Route } from 'react-router-dom'

export default function home1(props:any) {
  const list = [
    { id: 1, title: '111'},
    { id: 2, title: '222'},
    { id: 3, title: '333'}
  ]

  const replaceShow = ({ id, title }) => {
    // props.history.replace(`/home/home1/homeContent/${id}/${title}`)
    // props.history.replace(`/home/home1/homeContent/?id=${id}&title=${title}`)
    props.history.replace(`/home/home1/homeContent`, {id, title})
  }

  const pushShow = ({ id,title }) => {
    // props.history.push(`/home/home1/homeContent/${id}/${title}`)
    // props.history.push(`/home/home1/homeContent/?id=${id}&title=${title}`)
    props.history.push(`/home/home1/homeContent`, {id, title})
  }

  return (
    <div>
      Home1组件
      <ul>
        {
          list.map(item => {
            const { id, title} = item
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/home1/homeContent/${item.id}/${item.title}`}>{item.title}</Link> */}
                {/* <Link to={`/home/home1/homeContent/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                <Link replace={true} to={{pathname: "/home/home1/homeContent", state: { id, title }}}>{item.title}</Link>
                <button onClick={() => pushShow(item)}>push查看</button>
                <button onClick={() => replaceShow(item)}>replace查看</button>
              </li>
            )
          })
        }
      </ul>
      {/* 声明接受params参数 */}
      {/* <Route path="/home/home1/homeContent/:id/:title" component={HomeContent}/> */}
      {/* <Route path="/home/home1/homeContent" component={HomeContent}/> */}
      <Route path="/home/home1/homeContent" component={HomeContent}/>
    </div>
  )
}
