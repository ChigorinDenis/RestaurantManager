import React from 'react';
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
      <div className="container">
        <LogIn></LogIn>
        {/* <BanketPage></BanketPage>  */}
        {/* <StartPage></StartPage>        */}
      </div>
    <Footer></Footer>
    </>
  );
}

export default App;
