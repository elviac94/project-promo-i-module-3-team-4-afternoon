import React from 'react';
import '../../stylesheets/ReactivePalettes.scss';
import ourstructure from '../../images/ourstructure.png';
import gif from '../../images/gif_code.gif';
import scheme from '../../images/esquema.png';

const Triangle = () => {

  const zoomInScheme = () => {
    const schemeImg = document.querySelector('.scheme-img');
    schemeImg.classList.toggle('img-large');
  }

  const zoomInGif = () => {
    const gifImg = document.querySelector('.code-img');
    gifImg.classList.toggle('img-large-gif');
  }

  return (
    <section className="demo__pages triangle">
      <h2 className="demo__pages--title"><img src={ourstructure} alt="Out structure" /></h2>

      <div className="demo__pages--content">
        <div className="scheme">
          <img className="scheme-img" src={scheme} alt="Esquema de componentes" onClick={zoomInScheme} />
          <details className="scheme__info"><summary>Esquema</summary>
          <p>Este fue el esquema definitivo a la hora de montar nuestros componentes.</p>
          <p>Se modificó en base a las necesidades durante cada una de las fases.</p></details>
        </div>

        <div className="code">
          <img className="code-img" src={gif} alt="Gif code" onClick={zoomInGif} />
          <details className="code__info"><summary>Código</summary>
          <p>Un rápido vistazo a cómo fuimos creando y encajando los componentes.</p>
          <p>Como el esquema, fue sufriendo modificaciones (¡muchas!) a lo largo de todo el proyecto según fuimos añadiendo funcionalidades.</p></details>
        </div>
      </div>
    </section>
  )
}

export default Triangle;