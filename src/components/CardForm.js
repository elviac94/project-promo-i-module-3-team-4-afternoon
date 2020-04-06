import React from 'react';
import CardPreview from './CardPreview';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="CardForm">
            <CardPreview />
        </div>
    );
  }
}

export default CardForm;