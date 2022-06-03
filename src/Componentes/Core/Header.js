import React, { useState, useContext} from 'react';
import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import headerLogo from '../../Assets/Images/Desktop/Group38.svg';
import vertical from '../../Assets/Video/VERTICAL.mp4';
import horizontal from '../../Assets/Video/HORIZONTAL.mp4';
import  logoGranada from '../../Assets/Images/Mobile/logogranada.png';
import cierre from '../../Assets/Images/Mobile/Bstadium.png';
import  wasap from '../../Assets/Images/Desktop/Vector.svg';
import { FormattedMessage } from 'react-intl';
import {contextLanguage} from '../../Context/ContextLanguage';



function Header() {

    const idioma = useContext(contextLanguage);
    console.log({idioma});

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [show, setShow] = useState(false);
    
    

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

  return (
    <header>
        <div className='header'>

            <video muted loop autoPlay className='video-mobile'>
                <source src={vertical} type="video/mp4"></source>
                Tu navegador no soporta los vídeos de HTML5
            </video>

            <video muted loop autoPlay className='video-desktop'>
                <source src={horizontal} type="video/mp4"></source>
                Tu navegador no soporta los vídeos de HTML5
            </video>
            
            <nav>
            <div className='dropdown'>
                <div className='dropdown-icon'>

                {
                    isMenuOpen ?
                    <FontAwesomeIcon icon={faX} style={{color:"white"}} onClick={()=>setIsMenuOpen(false)}/>
                    : <FontAwesomeIcon icon={faBars} style={{color:"white"}} onClick={()=>setIsMenuOpen(true)}/>
                }
                    
                    
                </div>

                {
                    isMenuOpen ? 
                    <div className='dropdown-content'>
                        <li onClick={() => scrollTo('.mobile-one')}><FormattedMessage id='header.desktop.one'/></li>
                        <div className='dropdown-submenu'onClick={()=>setShow(!show)}>
                            <li><FormattedMessage id='header.desktop.two'/></li>
                            <span className='dropdown-submenu-icon'><FontAwesomeIcon icon={faAngleDown} /></span>
                        </div>
                        
                        {
                            show ? <div className='dropdown-bbb'>    
                            <li onClick={() => scrollTo('.mobile-two')}><FormattedMessage id='header.desktop.lione'/></li>
                            <li onClick={() => scrollTo('.mobile-three')}><FormattedMessage id='header.desktop.litwo'/></li>
                            <li onClick={() => scrollTo('.mobile-four')}><FormattedMessage id='header.desktop.lithree'/></li>
                            </div> : null
                        }

                        <li onClick={() => scrollTo('.landing-first')}><FormattedMessage id='header.desktop.three'/></li>
                        <li onClick={() => scrollTo('.landing-last')}><FormattedMessage id='header.desktop.four'/></li>
                    </div> : null
                } 

                
            </div>

            
            <img className='image-logo' src={headerLogo} alt=''></img>
            

            <div className='dropdown-content-desktop'>
                    <li onClick={() => scrollTo('.desktop-one')}><FormattedMessage id='header.desktop.one'/></li>
                    <div className='dropdown-header'>
                        <li onClick={() => scrollTo('.desktop-two')}><FormattedMessage id='header.desktop.two'/></li>    
                    <div className='dropdown-content-header'>
                        <li onClick={() => scrollTo('.desktop-two')}><FormattedMessage id='header.desktop.lione'/></li>
                        <li onClick={() => scrollTo('.desktop-three')}><FormattedMessage id='header.desktop.litwo'/></li>
                        <li onClick={() => scrollTo('.desktop-four')}><FormattedMessage id='header.desktop.lithree'/></li>
                    </div>
                </div>
                    <li onClick={() => scrollTo('.landing-first')}><FormattedMessage id='header.desktop.three'/></li>  
                    <li onClick={() => scrollTo('.landing-last')}><FormattedMessage id='header.desktop.four'/></li>
            </div>
            
            <div className='btn-container'>
                <button className='btn-container-header' onClick={() => window.open("https://bstadium.es/granada-cf/tour-por-el-nuevo-los-carmenes-estadio-de-granada-cf/")}>
                    <FormattedMessage id='header.desktop.button'/>
                </button>
            </div>

            <div className='lang-container'>
                <button className={idioma.locale === 'es-ES' ? "btn-start" : 'btn-style'} onClick={() => idioma.changeLanguage('es-ES')}>ESP</button>
                <span>|</span>
                <button className={idioma.locale === 'en-US' ? "btn-start" : 'btn-style'} onClick={() => idioma.changeLanguage('en-US')}>ENG</button>
            </div>

            </nav>

            <div className='header-video-content'>
                <div className='header-text-block'>
                    <h2 className='header-title'><FormattedMessage id='video.desktop.title'/></h2>
                    <h2 className='header-title-two'><FormattedMessage id='video.desktop.subtitle'/></h2>
                    <button className='header-btn'><a target="_blank" rel="noopener noreferrer" className='footer-btn' href='https://bstadium.es/granada-cf/tour-por-el-nuevo-los-carmenes-estadio-de-granada-cf/' ><FormattedMessage id='video.desktop.button'/></a></button>
                    <div className='header-two-images'>
                        <img className='logo-one' src={logoGranada}alt=''></img>
                    </div>
                    <div className='header-cierre'>
                            <p className='header-cierre-text'>Powered by</p>
                            <img src={cierre} alt=""></img>
                    </div>
                </div>
            </div>
            <div className='wasap-logo'>
                    <img  className='wasap-pic' src={wasap} alt=''></img>
            </div>

            
            
        </div>
        
    </header>
  )
}

export default Header