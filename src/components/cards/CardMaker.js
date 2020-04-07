import React from 'react';
import CardForm from './CardForm';
import Header from '../Header';
import Footer from '../Footer';
import CardPreview from './CardPreview'

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nombre Apellido',
      job: 'Front-end developer',
    }
    this.printName = this.printName.bind(this);
    this.printJob = this.printJob.bind(this);
    this.showIconPhone = this.showIconPhone.bind(this);
    this.showIconEmail = this.showIconEmail.bind(this);
    this.showIconLinkedin = this.showIconLinkedin.bind(this);
    this.showIconGithub = this.showIconGithub.bind(this);
  }

  printName(value) {
    this.setState({
        name: value
    });
}

  printJob(value) {
    this.setState({
        job: value
    });
  }

  showIconPhone(value) {
    const FillIconPhone = document.querySelector('#icon1');
    if (value !== '') {
      FillIconPhone.classList.remove('hidden--fill');
    } else {
      FillIconPhone.classList.add('hidden--fill');
    }
  }

  showIconEmail(value) {
    const FillIconEmail = document.querySelector('#icon2');
    if (value !== '') {
      FillIconEmail.classList.remove('hidden--fill')
    } else {
      FillIconEmail.classList.add('hidden--fill')
    }
  }

  showIconLinkedin(value) {
    const FillIconLinkedin = document.querySelector('#icon3');
    if (value !== '') {
      FillIconLinkedin.classList.remove('hidden--fill')
    } else {
      FillIconLinkedin.classList.add('hidden--fill')
    }
  }

  showIconGithub(value) {
    const FillIconGithub = document.querySelector('#icon4');
    if (value !== '') {
      FillIconGithub.classList.remove('hidden--fill')
    } else {
      FillIconGithub.classList.add('hidden--fill')
    }
  }

  render() {
    return (
      <div className="CardMaker">
        <Header />
        <main className="main-form">
          <section className="card--preview">
            <CardPreview 
              cardDetails={this.state} />
          </section>
          <CardForm 
            updateName={this.printName}
            updateJob={this.printJob}
            updatePhone={this.showIconPhone}
            updateEmail={this.showIconEmail}
            updateLinkedin={this.showIconLinkedin}
            updateGithub={this.showIconGithub}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default CardMaker;