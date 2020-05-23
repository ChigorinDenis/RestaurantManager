import React from 'react';

export default class Benefits extends React.Component {
    render() {
        return <>
         <div className="row center teal-text text-accent-4 benifits">
          <div className="col s12 m6 l3">
            <i class="medium material-icons">insert_chart</i>
            <h5>Число гостей</h5>
            <p>
              Наши залы для торжеств имеют большую площадь и могут вмещать до 300 гостей.
              Ваши гости будут чувствовать себя комофтно и уютно.              
            </p>
          </div>
          <div className="col s12 m6 l3 ">
          <i class="medium material-icons">restaurant</i>
            <h5>Быстрый сервис</h5>
            <p>Наш услужливый персонал обеспечит своевременный вынос блюд. Ваши гости
              останутся довольны всегда разогретым  блюдам.
            </p>
          </div>
          <div className="col s12 m6 l3">
            <i class="medium material-icons">room_service</i>
            <h5>Ассортимент блюд</h5>
            <p>Наш ассортимент представлен большим разнообразием блюд. Восточная, Русская, Корейская кухня
              может удовлетворить любые вкусовые потребности ваших дорогих гостей.
            </p>
          </div>
          <div className="col s12 m6 l3">
            <i class="medium material-icons">thumb_up_alt</i>
            <h5>Качество услуг</h5>
            <p>Гарантия качества  является одним из главных аспектов работы нашего ресторана.
              Мы не заставим вас переживать за проведение вашего торжественного мероприятия.
            </p>
          </div>
        </div>
        </>
    }
}