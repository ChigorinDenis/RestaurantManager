import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends React.Component {
    render() {
        return  <>
        <nav className="blue-grey darken-4">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#!"><FontAwesomeIcon icon={faHome} /></a></li>
            <li><a href="#!">Услуги</a></li>
            <li><a href="#!">Банкет</a></li>
            <li>
              <div className="user-container">
                <div className="user-ava">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="user-name" >имя_пользователя</div>
              </div>
            </li>
            <li className="active red darken1"><a className="modal-trigger" href="#modalLogin">Войти</a></li>
          </ul>
        </div>
      </nav>
      </>;  
    }
}