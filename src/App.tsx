import Login from '@/pages/login'
import Home from '@/pages/home'
import Header from '@/components/header'
import MyNavLink from '@/components/myNavLink'
import './App.css'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      <MyNavLink to="/login">Login</MyNavLink>
      <MyNavLink to="/home">Home</MyNavLink>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
    </div>
  );
}

export default App;
