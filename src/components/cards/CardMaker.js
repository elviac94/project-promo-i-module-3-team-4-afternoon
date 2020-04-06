import React from 'react';
// import Form from './Form';
import CardForm from './CardForm';
import Header from '../Header';
import Footer from '../Footer';
import CardPreview from './CardPreview'

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userInput: {
        name: 'Nombre Apellido',
        job: 'Front-end developer',
        palette: 1
      }
  }
}


  render() {
      return (
        <div className="CardMaker">
          <Header />
          <CardPreview />
          <CardForm />
          
          <Footer />
        </div>
      );
  }
}


export default CardMaker;