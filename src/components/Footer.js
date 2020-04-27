import React from 'react';
import LogoAdalab from '../images/logo-adalab.png';
import LogoReactGirls from '../images/reactlogo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="wrapperFooter">
        <div className="footer__container">
          <h3 className="footer__container--title">Awesome profile-cards @2020</h3>
          <div className="footer__container--logo">
            <Link className="logo-container" to="/reactivePalettes" title="Saber más del proyecto">
                <img src={LogoReactGirls} alt="Logo React Girls" title="Visitar github equipo" />
              </Link>
            <a className="logo-container" href="https://adalab.es" title="Visitar web de Adalab" target="_blank" rel="noopener noreferrer">
              <img src={LogoAdalab} alt="Logo Adalab" title="Visitar web de Adalab" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;