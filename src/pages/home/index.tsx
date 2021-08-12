import MyNavLink from '@/components/myNavLink'
import Header from '../../components/header'
import Home1 from '@/pages/Home/home1'
import Home2 from '@/pages/Home/home2'
import Count from '../../components/Count/Count'

import { Route, Switch, Redirect } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <Header />
      <Count/>
      <MyNavLink to="/home/home1">Home1</MyNavLink>
      <MyNavLink to="/home/home2">Home2</MyNavLink>
      <Switch>
        <Route path="/home/home1" component={Home1}/>
        <Route path="/home/home2" component={Home2}/>
        <Redirect to="/home/home1"></Redirect>
      </Switch>
    </div>
  );
}

export default Home;
