import React from 'react';
import './Landing.css';
import ParallaxModule from './Parallax';
import icon01 from '../../Assets/Icons/Mobile/Calendar.svg';
import icon02 from '../../Assets/Icons/Mobile/Clock.svg';
import icon03 from '../../Assets/Icons/Mobile/Place.svg';
import icon04 from '../../Assets/Icons/Mobile/Person.svg';
import icon05 from '../../Assets/Icons/Mobile/Language.svg';
import icon06 from '../../Assets/Icons/Mobile/Declined.svg';
import icon07 from '../../Assets/Icons/Mobile/Slider.svg';
import llave from '../../Assets/Images/Desktop/llave.svg';
import llave2 from '../../Assets/Images/Desktop/llave2.svg';
import llave2b from '../../Assets/Images/Desktop/llave2b.svg';
import imgItinerario from '../../Assets/Images/Desktop/itinerario.png';
import imgMobile from '../../Assets/Images/Mobile/itinerario.png';
import menu01 from '../../Assets/Images/Mobile/touch.svg';
import menu02 from '../../Assets/Images/Mobile/gafas.svg';
import menu03 from '../../Assets/Images/Mobile/selfie.svg';
import { FormattedMessage } from 'react-intl';


function Landing() {
  return (
    <section>
        
        <ParallaxModule/>

        

          {/*********************************** ITINERARY *****************************************/}
          <div className='landing-first'>
            <div className='landing-first-main'>
              <img className='landing-llave-left' src={llave} alt=""></img>
              <h2 className='landing-llave-h2'><FormattedMessage id='landing.first.title'/></h2>
            </div>

            <div className='first-container-content'>
              <div className='first-image-mobile'>
                <img className='img-mobile' src={imgMobile} alt=''></img>
              </div>
              <img className='first-image' src={imgItinerario} alt=''></img>
              <div className='first-container-list'>
                <li className='first-container-items'>
                  <div className='number-background'>
                    <p className='black-number'>1</p>
                  </div>           
                  <p className='list-paragraph'><FormattedMessage id='landing.first.one'/></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>2</p>
                </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.two'/></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>3</p>
                </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.three'/><img className='icon-item' src={menu01} alt=''></img></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>4</p>
                </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.four'/></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>5</p>
                </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.five'/></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>6</p>
                </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.six'/></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>7</p>
                </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.seven'/><img className='icon-item' src={menu02} alt=''></img></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>8</p>
                  </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.eight'/></p>
                </li>

                <li className='first-container-items'>
                <div className='number-background'>
                  <p className='black-number'>9</p>
                </div>
                  <p className='list-paragraph'><FormattedMessage id='landing.first.nine'/><img className='icon-item' src={menu03} alt=''></img></p>
                </li>
                   
              </div>
            </div>
          </div>


          {/*********************************** ADDITIONAL INFORMATION *****************************************/}
        <div className='landing-last'>
          <div className='landing-last-container'>
            <div className='landing-last-main'>
              <h2 className='landing-last-h2'><FormattedMessage id='landing.desktop.title'/></h2>
              <img className='landing-llave-mobile' src={llave2b} alt=""></img>
              <img className='landing-llave-desktop' src={llave2} alt=""></img>
            </div>

            <div className='landing-another-div'>
            <div className='landing-div'>
              <img className='list-icon' src={icon01} alt=''/>
              <div className='landing-desktop'>
                <p><b className='landing-bold'><FormattedMessage id='landing.desktop.first'/>&nbsp;</b></p>
                <div>
                     <p><FormattedMessage id='landing.desktop.firstdate'/>&nbsp;<b>18:00h & 19:00h</b></p>
                     <p><FormattedMessage id='landing.desktop.seconddate'/>&nbsp;<b>10:00h & 11:00h</b></p>
                </div>
                
              </div>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon02} alt=''/>
              <p><b><FormattedMessage id='landing.desktop.two'/>&nbsp;</b><FormattedMessage id='landing.desktop.twodate'/></p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon03} alt=''/>
              <div>  
                <p><b><FormattedMessage id='landing.desktop.three'/>&nbsp;</b><FormattedMessage id='landing.desktop.threedate'/></p>
                <p><b><FormattedMessage id='landing.desktop.three2'/>&nbsp;</b><FormattedMessage id='landing.desktop.threedate2'/></p>
              </div>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon03} alt=''/>
              <div className='landing-desktop'>  
                <p><b><FormattedMessage id='landing.desktop.three'/>&nbsp;</b></p>
                <div>
                  <p><FormattedMessage id='landing.desktop.threedate'/></p>
                  <p><b><FormattedMessage id='landing.desktop.three2'/>&nbsp;</b><FormattedMessage id='landing.desktop.threedate2'/></p>
                </div>
              </div>
            </div>

            <div className='landing-div'>
             <img className='list-icon' src={icon04} alt=''/>
              <p><b><FormattedMessage id='landing.desktop.four'/> </b><FormattedMessage id='landing.desktop.fourdate'/></p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon05} alt=''/>
              <p><b><FormattedMessage id='landing.desktop.five'/> </b><FormattedMessage id='landing.desktop.fivedate'/></p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon06} alt=''/>
              <p><b><FormattedMessage id='landing.desktop.six'/> </b><FormattedMessage id='landing.desktop.sixdate'/></p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon07} alt=''/>
              <p><b><FormattedMessage id='landing.desktop.seven'/> </b><FormattedMessage id='landing.desktop.sevendate'/></p>
            </div>

            <div className='landing-div'>
              <img className='list-icon' src={icon07} alt=''/>
              <div className='landing-desktop'>
                <p><b><FormattedMessage id='landing.desktop.seven'/> </b></p>
                <div>
                <p><FormattedMessage id='landing.desktop.sevendate'/></p>
                </div>
              </div>
              
            </div>
            </div>

            
          </div>
        </div>
        
    </section>
  )
}

export default Landing