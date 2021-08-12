import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Study from '@/pages/Study'
// import MyNavLink from '@/components/myNavLink'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <MyNavLink to="/login">Login</MyNavLink>
      <MyNavLink to="/home">Home</MyNavLink> */}
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/study" component={Study}/>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
