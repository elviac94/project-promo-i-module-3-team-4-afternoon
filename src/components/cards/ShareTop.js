import React from 'react';

// Componente no necesario (props en el collapsable)
class ShareTop extends React.Component {
  render() {
    return (
        <div className="share--top share--top--active">
          <div className="share--icon ">
            <i className="fas fa-share-alt"></i>
            <h3 className="share--title">comparte</h3>
          </div>
          <a className="share--button">
            <div className="arrow"> </div>
          </a>
        </div>
    )
  }
}

export default ShareTop;