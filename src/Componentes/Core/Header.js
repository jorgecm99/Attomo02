import React, { useState} from 'react';
import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import headerLogo from '../../Assets/Images/Mobile/Group 38.png';
import videoGranada from '../../Assets/Video/TOURGCF.mp4';
import  logoGranada from '../../Assets/Images/Mobile/logogranada.png';
import  logoBstadium from '../../Assets/Images/Mobile/logobstadium.png';
import  wasap from '../../Assets/Images/Desktop/Vector.svg'



function Header() {

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

  return (
    <header>
        <div className='header'>

            <video muted loop autoPlay className='back-video'>
                <source src={videoGranada} type="video/mp4"></source>
                Tu navegador no soporta los vídeos de HTML5
            </video>
            
            <nav>
            <div className='dropdown'>
                <div className='dropdown-icon'>

                {
                    isMenuOpen ?
                    <FontAwesomeIcon icon={faX} style={{color:"white"}}/>
                    : <FontAwesomeIcon icon={faBars} style={{color:"white"}} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
                }
                    
                    
                </div>

                {
                    isMenuOpen ? 
                    <div className='dropdown-content'>
                        <li onClick={() => scrollTo('.desktop-two')}>Mural interactivo</li>
                        <li onClick={() => scrollTo('.desktop-three')}>Experiencia inmersiva 360°</li>
                        <li onClick={() => scrollTo('.desktop-four')}>Foto con jugadores</li>
                    </div> : null
                } 

                
            </div>

            
            <img className='image-logo' src={headerLogo} alt=''></img>
            

            <div className='dropdown-content-desktop'>
                    <li onClick={() => scrollTo('.desktop-one')}>¿Qué es?</li>
                    <div className='dropdown-header'>
                        <li>¿Qué incluye?</li>    
                    <div className='dropdown-content-header'>
                        <li onClick={() => scrollTo('.desktop-two')}>Mural interactivo</li>
                        <li onClick={() => scrollTo('.desktop-three')}>Experiencia inmersiva 360°</li>
                        <li onClick={() => scrollTo('.desktop-four')}>Foto con jugadores</li>
                    </div>
                </div>  
                    <li onClick={() => scrollTo('.landing-last')}>Info Práctica</li>
            </div>
            
            <div className='btn-container'>
                <button onClick={() => window.open("https://bstadium.es/granada-cf/tour-por-el-nuevo-los-carmenes-estadio-de-granada-cf/")}>
                    Comprar entradas
                </button>
            </div>

            </nav>

            <div className='header-video-content'>
                <h2 className='header-title'>tour interactivo</h2>
                <h2 className='header-title-two'>experiencia inmersiva</h2>
                <button className='header-btn'><a target="_blank" rel="noopener noreferrer" className='footer-btn' href='https://bstadium.es/granada-cf/tour-por-el-nuevo-los-carmenes-estadio-de-granada-cf/' >comprar</a></button>
                <div className='header-two-images'>
                    <img className='logo-one' src={logoGranada}alt=''></img>
                    <img className='logo-one' src={logoBstadium} alt=''></img>
                </div>
                <div className='wasap-logo'>
                    <img  className='wasap-pic' src={wasap} alt=''></img>
                </div>
            </div>

            
            
        </div>
        
    </header>
  )
}

export default Header