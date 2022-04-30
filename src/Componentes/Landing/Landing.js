import React from 'react';
import './Landing.css';
import videoGranada from '../../Assets/Video/TOURGCF.mp4';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Landing() {
  return (
    <section>
        <div className='landing-video'>
            <video width="100%" controls autoplay>
            <source src={videoGranada} type="video/mp4"></source>
            Tu navegador no soporta los vídeos de HTML5
            </video>
        </div>
        <div className='parallax-container'>
        <Parallax pages={2}>
            <ParallaxLayer speed={8}>
              <h2>¿qué es?</h2>
              <p>Una <b>experiencia única</b> que permite al visitante sumergirse en la vibrante emoción del día de partido, 
                conocer los secretos del club, interactuar con sus jugadores y muchas otras sorpresas.
              </p>
              <p>Conoce los <b>secretos</b> del estadio y el club mientras juegas e interactúas a través de experiencias 
                de realidad aumentada y virtual para todos los públicos. 
              </p>
            </ParallaxLayer>

            <ParallaxLayer offset={1}speed={0.5}>
              <h2>¿qué incluye?</h2>
              <h3>mural interactivo</h3>
              <p>Accede a contenido adicional como momentos históricos o  jugadores míticos 
                del Granada CF a través de la realidad aumentada. 
              </p>
            </ParallaxLayer>
          </Parallax>
    </div>
        
    </section>
  )
}

export default Landing