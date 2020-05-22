import React from 'react';

export default class CardDish extends React.Component {
    render() {
        return <>
            <div className="card-dish col s12">
                <label className="text-blue">
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                </label>
                <div className="container-img">
                    <img src="img/4.jpg" alt="манты"></img>
                </div>
                <div className="container-info">
                <div className="card-info">
                    <span className="card-price blue-grey-text">Манты</span>
                    <i className="grey-text">Порция: <b>180г.</b></i>
                    <span className="btn-cstm blue-text">Удалить</span>
                </div>
                <span className="card-price red-text text-lighten-1">245 &#8381;</span>
                <div class="count-portions">
                    <input  id="count" type="text" class="validate" />
                    <label for="count">Количество</label>
                </div>
                </div>
            </div>
      
        </>
    }
} 