import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends React.Component {
    render() {
        return  <>
        <nav className="blue-grey darken-4">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></li>
            <li><Link>Услуги</Link></li>
            <li><Link to="/banket">Банкет</Link></li>
            <li>
              <div className="user-container">
                <div className="user-ava">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="user-name">some_user</div>
              </div>
            </li>
            <li className="active red darken1"><a className="modal-trigger" href="#modalLogin">Войти</a></li>
          </ul>
        </div>
      </nav>
      </>;  
    }
}