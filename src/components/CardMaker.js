import React from 'react';
// import Form from './Form';
import CardPreview from './CardPreview';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
      return (
        //   Esto hay que revisarlo
        <div className="CardMaker">
            <div className="Header"></div>
            <div className="CardPreview"></div>
            <div className="Footer"></div>
        </div>
      );
  }
}


export default CardMaker;