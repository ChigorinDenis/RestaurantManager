import React from 'react';

export default class Carousel extends React.Component {
    render() {
        return <>
            <div className="carousel carousel-slider">
              <div className="carousel-fixed-item center space-between">
                <div className="btn waves-effect green  white-text">Заказать Банкет</div>
                <div className="btn waves-effect white grey-text darken-text-4">Смотреть Меню</div>
              </div>
              <div className="carousel-item white-text" >
                <img src="img/1.jpg" alt="1" />
              </div>
              <div className="carousel-item"><img src="img/2.jpg" alt="2" /></div>
              <div className="carousel-item"><img src="img/3.jpg" alt="3" /></div>
            </div>
        </>
    }
}