import React from 'react';

class ShareTop extends React.Component {
  render() {
    return (
        <div className="share--top">
          <div className="share--icon">
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