import React from 'react';
import videoGranada from '../../Assets/Video/TOURGCF.mp4'

function Landing() {
  return (
    <section>
        <div className='landing-video'>
            <video width="100%" controls autoplay>
            <source src={videoGranada} type="video/mp4"></source>
            Tu navegador no soporta los vídeos de HTML5
            </video>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
  )
}

export default Landing