import React from 'react';
import LogoAdalab from '../images/logo-adalab.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div className="Footer">
      <footer className="wrapperFooter">
        <div className="footer__container">
          <h3 className="footer__container--title">Awesome profile-cards @2020</h3>
          <div className="footer__container--logo">
            <a className="logo-container" href="https://adalab.es" title="Visitar web de Adalab" target="_blank" rel="noopener noreferrer">
              <img src={LogoAdalab} alt="Logo Adalab" title="Visitar web de Adalab" />
            </a>
          </div>
      
        </div>
      </footer>
      </div>
    );
  }
}

export default Footer;