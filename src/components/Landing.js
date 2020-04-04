import React from 'react';
import Logo from '../images/logo_awesome.svg'

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Landing">
        <main id="mainindex" class="wrapperMain">
          <div className="mainindex__container">
            <div className="mainindex__container--logo">
              <a className="mainindex__logo-container" href="#" title="">
                <img src={Logo} alt="Logo Awesome profile-cards"
                    title="Awesome profile-cards" />
              </a>
            </div>
          <div className="mainindex__container--text">
            <h1 className="mainindex__container--title">Crea tu tarjeta de visita</h1>
            <p className="mainindex__container--prhase">Crea mejores contactos profesionales de forma fácil y cómoda</p>
          </div>
          <div className="mainindex__container--typeface">
            <div className="image-Designe">
              <i className="far fa-object-ungroup"></i>
              <h3 className="text-item">Diseña</h3>
          </div>
          <div className="image-complete">
              <i className="far fa-keyboard fa-lg"></i>
              <h3 className="text-item">rellena</h3>
          </div>
          <div className="image-share">
              <i className="fas fa-share-alt"></i>
              <h3 className="text-item">comparte</h3>
            </div>
          </div>
          <a className="mainindex__button" href="./form.html#mainform.html">comenzar</a>
          </div>
        </main>
      </div>
    );
  }
}

export default Landing;