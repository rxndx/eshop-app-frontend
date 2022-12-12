//dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

//history
import { history } from '../../service/history';

//components
import Header from '../Header/Header';
import Home from '../home/Home';
import Login from '../Login/Login';
import Signup from '../Register/Signup';
import Basket from '../Basket/Basket';
import Profile from '../Profile/Profile';
import Product from '../Products/Products';
import Item from '../Item/Item';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import {JwtRedirect} from '../JwtRedirect/JwtRedirect';

//includes
import './App.css';

//Run
function App() {
  return (
    <div>
      <Router history={history}>
      <Route exact path={['/', '/profile', '/basket', '/products']}><Header/></Route>
      <Route exact path={['/']}><Banner/></Route>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/basket'><Basket/></Route>
          <Route path='/account/login'><Login /></Route>
          <Route path='/account/signup'><Signup /></Route>
          <Route path='/me'><Profile/></Route>
          <Route path='/categories'><Product/></Route>
          <Route path='/products'><Item/></Route>
          <Route path='/obtain-token'><JwtRedirect /></Route>
          <Route path='*'><NotFound/></Route>
        </Switch>
      <Route exact path={['/', '/profile', '/basket', '/products']}><Footer/></Route>
      </Router>
    </div>
  );
}

export default App;