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
            {/* <CardForm /> */}
            <CardPreview />
        </div>
      );
  }
}


export default CardMaker;