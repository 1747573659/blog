import Count from '../../containers/Count'
import MyNavLink from '@/components/myNavLink'
import Home1 from '@/pages/Study/home1'
import Home2 from '@/pages/Study/home2'
import { Route, Switch, Redirect } from 'react-router-dom'

import store from '../../redux/store'

export default function Study() {
  return (
    <div>
      <Count store={store}/>
      <MyNavLink to="/study/home1">Home1</MyNavLink>
      <MyNavLink to="/study/home2">Home2</MyNavLink>
      <Switch>
        <Route path="/study/home1" component={Home1}/>
        <Route path="/study/home2" component={Home2}/>
        <Redirect to="/study/home1"></Redirect>
      </Switch>
    </div>
  )
}
