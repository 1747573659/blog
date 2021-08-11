import Login from '@/pages/login'
import Home from '@/pages/home'
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
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
