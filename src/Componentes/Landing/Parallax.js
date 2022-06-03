import React from 'react';
import './Parallax.css';
import menu01 from '../../Assets/Images/Mobile/touch.svg';
import menu02 from '../../Assets/Images/Mobile/gafas.svg';
import menu03 from '../../Assets/Images/Mobile/selfie.svg';
import llave from '../../Assets/Images/Desktop/llave.svg';
import llave2b from '../../Assets/Images/Desktop/llave2b.svg';
import llaveDesktop from '../../Assets/Images/Desktop/llave2.svg';
import { FormattedMessage } from 'react-intl';



function ParallaxModule() {
  return (
    <div>
        <div className='parallax-mobile'>

            <div className='mobile-one'>
                <div className='landing-title-desktop'> 
                        <img className='landing-llave' src={llave} alt=""></img>
                        <h2 className='title title-desktop'><FormattedMessage id='parallax.desktop.first.title'/></h2>
                </div> 
            
                <div className='desktop-first-text'>
                    <p className='first-para'><FormattedMessage id='parallax.desktop.first.para'
                                                                 values={{b: (chunks)=>
                                                                 <strong style={{fontFamily:'Livvic-semi'}}>{chunks}
                                                                 </strong>}}/>
                    </p>
                    <p className='first-para'><FormattedMessage id='parallax.desktop.second.para'
                                                                 values={{b: (chunks)=>
                                                                 <strong style={{fontFamily:'Livvic-semi'}}>{chunks}
                                                                 </strong>}}/>
                    </p>
                </div>
            </div>

            <div className='mobile-two'>
                    <div className='definitivo-container'>
                        <h2 className='definitivo-text'><FormattedMessage id='parallax.desktop.second.title'/></h2>
                        <img src={llave2b} alt="" className='parallax-llave'></img>            
                    </div>
                <div className='desktop-two-text' style={{top: '75px'}}>
                    <div className='menu'>
                        <img className='menu-icon' src={menu01} alt=''/>
                        <h2 className='parallax-second'><FormattedMessage id='parallax.desktop.second.subtitle'/></h2>
                    </div>           
                    <p className='parallax-second'><FormattedMessage id='parallax.desktop.second.paragraph'/>
                    </p>
                </div>
            </div>

            <div className='mobile-three'>
                <div className='desktop-one-text'>
                    <div className='menu-three'>  
                        <h2 className='parallax-three'><FormattedMessage id='parallax.desktop.three.subtitle'/></h2>
                        <img className='menu-icon' src={menu02} alt=''/>
                    </div>
                    <p className='parallax-second'><FormattedMessage id='parallax.desktop.three.paragraph'/> 
                    </p>
                </div>              
            </div>

            <div className='mobile-four'>
                <div className='desktop-two-text'>
                    <div className='menu-four'>
                        <img className='menu-icon' src={menu03} alt=''/>
                        <h2 className='parallax-four'><FormattedMessage id='parallax.desktop.four.subtitle'/></h2>
                    </div>
                    <p className='parallax-second'><FormattedMessage id='parallax.desktop.four.paragraph'/>
                    </p>
                </div>             
            </div>
                      

        
        </div>

        {/*********************************** PARALLAX DESKTOP VERSION*****************************************/}

        <div className='parallax-desktop'>
            <div className='desktop-one'>
                <div className='landing-title-desktop'> 
                        <img className='landing-llave-left' src={llave} alt=""></img>
                        <h2 className='title title-desktop'><FormattedMessage id='parallax.desktop.first.title'/></h2>
                </div> 
            
                <div className='desktop-first-text'>
                    <p className='first-para'><FormattedMessage id='parallax.desktop.first.para'
                                                                 values={{b: (chunks)=>
                                                                 <strong style={{fontFamily:'Livvic-semi'}}>{chunks}
                                                                 </strong>}}/>
                    </p>
                    <p className='first-para'><FormattedMessage id='parallax.desktop.second.para'
                                                                 values={{b: (chunks)=>
                                                                 <strong style={{fontFamily:'Livvic-semi'}}>{chunks}
                                                                 </strong>}}/>
                    </p>
                </div>

            </div>

            

            <div className='desktop-two'>
                <div className='parallax-image-container-desktop'>
                        <h1 className='h1'><FormattedMessage id='parallax.desktop.second.title'/></h1>
                        <img src={llaveDesktop} alt="" className='parallax-llave'></img>     
                </div>
                <div className='desktop-two-text'>
                    <div className='menu'>
                        <img className='menu-icon' src={menu01} alt=''/>
                        <h2 className='parallax-second'><FormattedMessage id='parallax.desktop.second.subtitle'/></h2>
                    </div>           
                    <p className='parallax-second'><FormattedMessage id='parallax.desktop.second.paragraph'/>
                    </p>
                </div>
            </div>

            <div className='desktop-three'>
                <div className='desktop-one-text'>
                    <div className='menu-three'>  
                        <h2 className='parallax-three'><FormattedMessage id='parallax.desktop.three.subtitle'/></h2>
                        <img className='menu-icon' src={menu02} alt=''/>
                    </div>
                    <p className='parallax-second'><FormattedMessage id='parallax.desktop.three.paragraph'/> 
                    </p>
                </div>              
            </div>

            <div className='desktop-four'>
                <div className='desktop-four-text'>
                    <div className='menu-four'>
                        <img className='menu-icon' src={menu03} alt=''/>
                        <h2 className='parallax-four'><FormattedMessage id='parallax.desktop.four.subtitle'/></h2>
                    </div>
                    <p className='parallax-second'><FormattedMessage id='parallax.desktop.four.paragraph'/>
                    </p>
                </div>             
            </div>


        </div>

        

    </div>
  )
}

export default ParallaxModule