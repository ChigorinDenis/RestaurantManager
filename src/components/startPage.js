import React from 'react';
import Benefits from './benefits';
import Carousel from './carousel';
import SideNav from './sidenav';

export default class StartPage extends React.Component {
    render() {
        return <>
            <Carousel></Carousel>
            <Benefits></Benefits>
            <SideNav></SideNav>
                        <div className="row">
                        <h4 className="col s12 blue-grey-text">Хиты блюд</h4>
                        <div className="col s12 m6 l3">
                        <div className="card">
                            <div className="card-image">
                            <img className="responsive-img" src="img/4.jpg" alt="1" />
                            </div>
                            <div className="card-content">
                            <h5 className="blue-text text-lighten-1 activator">Манты</h5>           
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p> 
                            <div className="card-block">
                                <span className="white-text chip blue-grey lighten-1">говядина</span>
                                <span className="white-text chip blue-grey lighten-1 ">лук</span>
                                <span className="white-text chip blue-grey lighten-1">мука</span>
                                <span className="white-text chip blue-grey lighten-1">яйцо</span>
                            </div>
                            <div className="row card-block">
                                <i className="dish-weight col s12 grey-text"><b>Порция:</b> 180 г.</i>
                                <span className="card-price red-text text-lighten-1 col s12">245 &#8381;</span>                   
                            </div>
                            </div>            
                            <div className="card-action">
                            <div className="waves-effect green btn">Добавить</div>                                                  
                            </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                        <div className="card">
                            <div className="card-image">
                            <img src="img/5.jpg" alt="1" />
                            </div>
                            <div className="card-content">
                            <h5 className="blue-text text-lighten-1">Узбекский плов</h5>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <div class="waves-effect green btn">Добавить</div>
                            </div>
                            </div>
                        </div>
                    
                        <div className="col s12 m6 l3">
                        <div className="card">
                            <div className="card-image">
                            <img src="img/6.jpg" alt="1" />
                            </div>
                            
                            <div className="card-content">
                            <h5 className="blue-text text-lighten-1">Каурдак</h5>
                            <p>Традиционное жаркое у казахов, киргизов, таджиков, узбеков, карачаевцев и туркменов из мяса или субпродуктов и лука</p>
                            </div>
                            <div className="card-action">
                            <div class="waves-effect green btn">Добавить</div>
                            </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                        <div className="card">
                            <div className="card-image">
                            <img src="img/7.jpg" alt="1" />
                            </div>
                            <div className="card-content">
                            <h5 className="blue-text text-lighten-1">Лагман</h5>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <div class="waves-effect green btn">Добавить</div>
                            </div>
                            </div>
                        </div>
                        <iframe 
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d11157.24179260808!2d63.315407!3d45.644587!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x41f42325f2062dc3%3A0xca89713c95c1f2bd!2z0J7QvNCw0YDQvtCyLCDQotC-0YDQtdGC0LDQvA!3m2!1d45.6518622!2d63.3025853!5e0!3m2!1sru!2skz!4v1588688330608!5m2!1sru!2skz"
                        width="100%"
                        height="300"
                        frameBorder="1"
                        style={{border: 1}}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0">
                        </iframe>
            </div>
        </>
    }
}