import React from 'react';

export default class LogIn extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { enter: true };
    }
    handleChange = (e) => {
        e.preventDefault();
        const { enter } = this.state;
        this.setState({ enter: !enter });
    }
    render() {
        const registration = <>
            <div id="modalLogin" className="modal">
                <div className="modal-content space-between">   
                    <div className="row">
                        <h5 className="col s12 blue-text">Регистрация</h5>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input  id="first_name" type="text" className="validate" />
                                    <label for="first_name">Фамилия</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="last_name" type="text" className="validate" />
                                    <label for="last_name">Имя</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input id="last_name" type="email" className="validate" />
                                    <label for="last_name">email</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">phone</i>
                                    <input id="last_name" type="tel" className="validate" />
                                    <label for="last_name">Телефон</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="last_name" type="password" className="validate" />
                                    <label for="last_name">Пароль</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="last_name" type="password" className="validate" />
                                    <label for="last_name">Повторите пароль</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <a href="!#" className="left link-underline" onClick={this.handleChange}>Войти</a>
                                    <div className="modal-close waves-effect green btn right">Войти</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>               
            </div>
        </>;
        const enter = <>
        <div id="modalLogin" className="modal">
            <div className="modal-content space-between">   
                <div className="row">
                    <h5 className="col s12 blue-text">Вход</h5>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input id="last_name" type="email" className="validate" />
                                <label for="last_name">email</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock</i>
                                <input id="last_name" type="password" className="validate" />
                                <label for="last_name">Пароль</label>
                            </div>
                            <label className="col s12">
                                <input type="checkbox" className="filled-in" />
                                <span>Запомнить меня</span>
                            </label>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <a href="!#" className="left link-underline" onClick={this.handleChange}>Регистрация</a>
                                <div className="modal-close waves-effect green btn right">Войти</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>               
        </div>
    </>;
    return this.state.enter ? enter : registration;
    }
}