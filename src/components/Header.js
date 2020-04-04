import React from 'react';
// import Logo from '../images/logo_awesome.svg'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <header className="header">
          <div className="wrapper-general">
              <div className="container">
                <a className="image" to="./Landing"></a>
              </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;