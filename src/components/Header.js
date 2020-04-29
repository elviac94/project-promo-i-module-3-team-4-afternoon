import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../images/logo_awesome.svg'

const Header = () => {
  return (
    <div className="Header">
      <header className="header">
        <div className="wrapper-general">
          <div className="header__container">
            <Link className="image" to='/' title="Ir al inicio"></Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;