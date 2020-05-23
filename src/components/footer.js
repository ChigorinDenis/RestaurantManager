import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
    render() {
    return <>
        <div className="page-footer blue-grey darken-4">  
            <div class="container">
                <div class="row">
                    <div className="container-social col l6 s12 ">
                    <h6>Мы в социальных сетях</h6>
                        <div className="social">
                            <a href="https://www.vk.com"><FontAwesomeIcon icon={faVk} /></a>
                            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookSquare} /></a>        
                        </div>
                    </div>
                    <div class="col l6  s12">
                <h6 class="white-text">Links</h6>
                {/* <ul className="right">
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                </ul> */}
              </div>
                    
                </div> 
                <div class="footer-copyright">
                        <p>© 2020 Copyright Text</p>                        
                    </div>   
            </div>
        
        </div>
      </> 
  
    }
}