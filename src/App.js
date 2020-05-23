import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css';
import './App.css';
import  NavBar  from './components/navBar';
import Footer from './components/footer';
import LogIn from './components/logIn';
import CardDish from './components/cardDish';
import BanketPage from './components/banketPage';
import StartPage from './components/startPage';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <LogIn></LogIn>     
      <div className="container">
      <Switch>
        <Route exact path="/" component={StartPage}/>
        <Route path="/banket" component={BanketPage}/>
      </Switch>    
      </div>
    <Footer></Footer>
    </>
  );
}

export default App;
