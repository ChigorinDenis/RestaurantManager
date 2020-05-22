import React from 'react';

export default class SideNav extends React.Component {
    render() { 
        return <>
            <ul id="slide-out" class="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                        <img src="img/sidenav.jpg" />
                        </div>
                        <a href="#user"><img className="circle" src="img/ava.png" /></a>
                        <a href="#name"><span className="white-text name">Some User</span></a>
                        <a href="#email"><span className="white-text email">someuserk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">person</i>Профиль пользователя</a></li>
                <li><a href="#!">История заказов</a></li>
                <li><div className="divider"></div></li>
                {/* <li><a className="subheader">Subheader</a></li> */}
                <li><a href="#!">Настройки</a></li>
                <li><a className="waves-effect" href="#!">Выйти</a></li>
            </ul>
            <a href="!#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </>
    }
}