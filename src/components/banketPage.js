import React from 'react';
import CardDish from "./cardDish";

export default class BanketPage extends React.Component {
    render() {
        return <>
          <div className="row">
            <div className="col l8">
            <div className="row">
                <h4>Банкет</h4>
                <div className="col  blue-text">Текущие заказы (1)</div>
                <div className="col grey-text">Предыдущие заказы</div>
            </div>
            <div className="row container-shadows ">
                <div className="col l7 ">
                    <h5>1. Дата и время банкета</h5>
                    <div className="row">
                        <div className="input-field col l5">
                            <i className="material-icons prefix">today</i>
                            <input type="date" id="date_banket"  />
                            <label for="date_banket">Дата банкета</label>
                        </div>
                        <div className="col l5">
                            <div className="btn green right">Проверить Дату</div>
                        </div>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">query_builder</i>
                        <input id="time_banket"type="time"  style={{width:'30%'}}/> 
                        <label for="time_banke">Время начала</label>
                    </div>               
                                  
                </div>
                <div className="col l5 ">
                    <h5>2. Число гостей</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">people</i>
                        <input id="count_guests"type="number"  min="1" max="300" style={{width:'80%'}} /> 
                        <label for="count_guests">Число</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Введите число гостей не более 300 чел.</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col l12">
                    <h5>3. Ассортимент Блюд</h5>
                    <div className="dishes-basket-header">
                        <div>
                            <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="blue-text">Вырбрать все</span>
                            </label>
                            <span className="red-text text-lighten-1 delete">Удалить выбранные</span>
                        </div>
                        <div className="btn-floating btn-small green lighten-1"><i class="material-icons">add</i></div>
                        
                    </div>  
                    <CardDish></CardDish>        
                </div>
            </div>
            <div className="row container-shadows">
                <div className="col l8">
                    <h5>4. Дополнительные услуги</h5>
                    <p>Дополнильные услуги включатся в заказ, для обсуждения деталей необходимо связаться с нами любым удобным для вас способом.</p>
                    <ul className="services">
                        <li>
                            <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="blue-text">Добавить авторское украшение зала <i className="grey-text">(+2000р.)</i></span>
                            </label>
                            
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="blue-text">Добавить услуги бармена <i className="grey-text">(+3000р.)</i></span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="blue-text">Добавить услуги ведущего <i className="grey-text">(+10 000р.)</i></span>
                            </label>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="row payment">
                <div className="col l6 ">
                    <ul id="tabs-swipe" className="tabs white-text">
                        <li className="tab active col l6"><a href="#test-swipe-1">Оплатa</a></li>
                        <li className="tab col l6"><a href="#test-swipe-2">Предоплата</a></li>
                    </ul>
                </div>
                <div  className="col l6 tab-content">
                    <div id="test-swipe-1" >
                        <p className="grey-text">Выберите этот пункт, если желаете оплатить заказ полностью</p>
                        <h5>Итоговая сумма: 10000&#8381;</h5>
                    </div>
                     <div id="test-swipe-2">
                        <p className="grey-text">Выберите этот пункт, если желаете оплатить заказ частично.
                        Минимальная сумма платежа должна составлять не менее 30% от заказа. 
                        </p>
                        <input id="payment"type="text" /> 
                        <label for="payment">Сумма платежа</label>                        
                     </div>
                </div>
                <div className="col l6 s12 payment-footer">
                <p>
                    <label>
                        <input name="group1" type="radio" checked />
                        <span>Банковский перевод</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Наличный рассчет</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio"  />
                        <span>Оплата картой</span>
                    </label>
                    </p>
                </div>
              </div>
            </div>
            <div className="col l4 confirm ">
                    <div className="row" style={{padding:"20px"}}>
                        <div className="col l12 s12 btn blue">Оформить заказ</div>
                        <p className="col  grey-text">Перед оформлением заказа проверьте выбор удовлетворяющих вас условий</p>
                        <table className="striped">
                            <thead>
                            <tr>
                                <th>Стол заказов</th>
                                <th className="right grey-text">60 чел.</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr >
                                <td>Блюд(5)</td>
                                <td className="right">20000р</td>
                            </tr>
                            <tr >
                                <td>Услуг(5)</td>
                                <td className="right">13000р</td>
                            </tr>
                            <tr >
                                <td><b>Общая сумма</b></td>
                                <td className="right"><b>13000р</b></td>
                            </tr>
                            </tbody>
                        </table>      
                    </div>
                </div>
        </div>    
            
        </>;
    }
}