import React from 'react';
import Logo from '../images/logo_awesome.svg'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="Landing">
      <main id="mainindex" className="wrapperMain">
        <div className="mainindex__container">
          <div className="mainindex__container--logo">
            <img src={Logo} alt="Logo Awesome profile-cards" title="Awesome profile cards" />
          </div>
          <div className="mainindex__container--text">
            <h1 className="mainindex__container--title">Crea tu tarjeta de visita</h1>
            <p className="mainindex__container--phrase">Crea mejores contactos profesionales de forma fácil y cómoda</p>
          </div>
          <div className="mainindex__container--typeface">
            <div className="image-design">
              <i className="far fa-object-ungroup"></i>
              <h3 className="text-item">Diseña</h3>
            </div>
            <div className="image-complete">
              <i className="far fa-keyboard fa-lg"></i>
              <h3 className="text-item">Rellena</h3>
            </div>
            <div className="image-share">
              <i className="fas fa-share-alt"></i>
              <h3 className="text-item">Comparte</h3>
          </div>
        </div>
        <Link className="mainindex__button" to="/CardMaker" title="Ir al creador de tarjetas">Comenzar</Link>
        </div>
      </main>
      <Link to="/reactivePalettes" title="Saber más del proyecto">
      <Footer />
      </Link>
    </div> 
  );
}

export default Landing;