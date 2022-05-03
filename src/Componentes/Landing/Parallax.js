import React from 'react';
import { Parallax } from 'react-parallax';
import './Parallax.css';
import image01 from '../../Assets/Images/Mobile/01.png';
import image02 from '../../Assets/Images/Mobile/02.png';
import image03 from '../../Assets/Images/Mobile/03.png';
import image04 from '../../Assets/Images/Mobile/04.png';
import rectangle from '../../Assets/Images/Mobile/Rectangle 104.png';
import menu01 from '../../Assets/Images/Mobile/touch.svg';
import menu02 from '../../Assets/Images/Mobile/gafas.svg';
import menu03 from '../../Assets/Images/Mobile/selfie.svg';
import llave from '../../Assets/Images/Desktop/llave.svg';

const insideStyle = {
    background : "transparent",
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)" ,
    width: 305,
}

const insideStyleTwo = {
    background : "transparent",
    position: "absolute",
    textAlign: "right",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)" ,
    width: 305,
}



function ParallaxModule() {
  return (
    <div>
        <div className='parallax-mobile'>
        <Parallax bgImage={image01} strength={100}>
            <div style={{height: 600}}>
                <div style={insideStyle}>
                    <h2>¿qué es?</h2>
                    <p className='first-para'>Una <b>experiencia única</b> que permite al visitante sumergirse en la vibrante emoción del día de partido, 
                    conocer los secretos del club, interactuar con sus jugadores y muchas otras sorpresas.
                    </p>
                    <p className='first-para'>Conoce los <b>secretos</b> del estadio y el club mientras juegas e interactúas a través de experiencias 
                    de realidad aumentada y virtual para todos los públicos. 
                    </p>
                </div>
            </div>
            <div className='parallax-image-container'>
            <img className='parallax-image' src={rectangle} alt=''></img>
            <h1>¿qué incluye?</h1>
            </div>
        </Parallax>

        

        <Parallax bgImage={image02} blur={{min: -1, max: 3}}>
            <div style={{height: 500}}>
                <div style={insideStyleTwo}>
                    <div className='menu'>
                        <img className='list-menu' src={menu01} alt=''/>
                        <h2 className='parallax-second'>mural interactivo</h2>
                    </div>           
                    <p className='parallax-second'>Accede a contenido adicional como momentos históricos o  jugadores míticos 
                       del Granada CF a través de la realidad aumentada. 
                    </p>
                </div>
            </div>
        </Parallax>

        <Parallax bgImage={image03} strength={100}>
            <div style={{height: 500}}>
                <div style={insideStyle}>
                    <div className='menu-three'>  
                        <h2 className='parallax-three'>experiencia inmersiva 360º</h2>
                        <img className='menu-icon' src={menu02} alt=''/>
                    </div>
                    <p>Siéntete como un verdadero jugador del Granada CF con esta espectacular 
                        experiencia de realidad virtual. Calienta junto con tus compañeros de equipo 
                        o vibra de la emoción al escuchar el himno por todo el estadio desde el centro del campo. 
                    </p>
                </div>
            </div>
        </Parallax>

        <Parallax bgImage={image04} strength={100}>
            <div style={{height: 500}}>
                <div style={insideStyleTwo}>
                    <div className='menu-four'>
                        <img className='menu-icon' src={menu03} alt=''/>
                        <h2 className='parallax-four'>foto con jugadores</h2>
                    </div>
                    <p>Aprovecha el palco presidencial para hacerte una foto con tus jugadores preferidos. 
                        Elige hasta 3 jugadores y consigue un recuerdo inolvidable.
                    </p>
                </div>
            </div>
        </Parallax>
        </div>

        {/*********************************** PARALLAX DESKTOP VERSION*****************************************/}

        <div className='parallax-desktop'>
            <div className='desktop-one'>
            <img className='landing-llave' src={llave} alt=""></img>
                <div className='desktop-first-text'>
                    <p className='first-para'>Una <b>experiencia única</b> que permite al visitante sumergirse en la vibrante emoción del día de partido, 
                    conocer los secretos del club, interactuar con sus jugadores y muchas otras sorpresas.
                    </p>
                    <p className='first-para'>Conoce los <b>secretos</b> del estadio y el club mientras juegas e interactúas a través de experiencias 
                    de realidad aumentada y virtual para todos los públicos. 
                    </p>
                </div>
            </div>

            <div className='desktop-two'>
                <div className='desktop-two-text'>
                    <div className='menu'>
                        <img className='list-menu' src={menu01} alt=''/>
                        <h2 className='parallax-second'>mural interactivo</h2>
                    </div>           
                    <p className='parallax-second'>Accede a contenido adicional como momentos históricos o  jugadores míticos 
                       del Granada CF a través de la realidad aumentada. 
                    </p>
                </div>
            </div>

            <div className='desktop-three'>
                <div className='desktop-one-text'>
                    <div className='menu-three'>  
                        <h2 className='parallax-three'>experiencia inmersiva 360º</h2>
                        <img className='menu-icon' src={menu02} alt=''/>
                    </div>
                    <p className='parallax-second'>Siéntete como un verdadero jugador del Granada CF con esta espectacular 
                        experiencia de realidad virtual. Calienta junto con tus compañeros de equipo 
                        o vibra de la emoción al escuchar el himno por todo el estadio desde el centro del campo. 
                    </p>
                </div>              
            </div>

            <div className='desktop-four'>
                <div className='desktop-two-text'>
                    <div className='menu-four'>
                        <img className='menu-icon' src={menu03} alt=''/>
                        <h2 className='parallax-four'>foto con jugadores</h2>
                    </div>
                    <p className='parallax-second'>Aprovecha el palco presidencial para hacerte una foto con tus jugadores preferidos. 
                        Elige hasta 3 jugadores y consigue un recuerdo inolvidable.
                    </p>

                </div>
                    
            </div>


        </div>

        

    </div>
  )
}

export default ParallaxModule