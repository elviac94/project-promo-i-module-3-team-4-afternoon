import React from 'react';
// import Form from './Form';
import CardForm from './CardForm';
import Header from '../Header';
import Footer from '../Footer';
import CardPreview from './CardPreview';
import defaultImage from '../DefaultImage';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userInput: {
        name: 'Nombre Apellido',
        job: 'Front-end developer',
        palette: 1,
        photo: defaultImage
      },
       profile: {
        avatar: defaultImage
      },
      isAvatarDefault: true,
  };
  this.updateAvatar = this.updateAvatar.bind(this);
}

updateAvatar(img){
  const {profile}=this.state;
  this.setState(prevState=>{
    let newProfile = {...profile, avatar: img};
    let newUserInput = prevState.userInput;

    return{
      profile: newProfile,
      isAvatarDefault: false,
      userInput: {...newUserInput, photo: img}
    
    }
  });
}

  render() {
      return (
        <div className="CardMaker">
          <Header />
          <main className="main-form">
          <section className="card--preview">
            <CardPreview avatar={this.state.profile.avatar} />
            </section>
            <CardForm 
            avatar={this.state.profile.avatar} 
            isAvatarDefault={this.isAvatarDefault} 
            updateAvatar={this.updateAvatar}  />
          </main>
          <Footer />
        </div>
      );
  }
}


export default CardMaker;