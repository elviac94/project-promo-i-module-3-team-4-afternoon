import React from 'react';
import CardForm from './CardForm';
import Header from '../Header';
import Footer from '../Footer';
import CardPreview from './CardPreview'
import defaultImage from '../DefaultImage';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Nombre Apellido',
        job: 'Front-end developer',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        palette: 1,
        photo: defaultImage
      },
      profile: {
        avatar: defaultImage
      },
      isAvatarDefault: true,
      activePanel: ''
    }
    this.updateAvatar = this.updateAvatar.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.updateUserInfoIcon = this.updateUserInfoIcon.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  updateAvatar(img) {
    const { profile } = this.state;
    this.setState(prevState => {
      let newProfile = { ...profile, avatar: img };
      let newuserInfo = prevState.userInfo;

      return {
        profile: newProfile,
        isAvatarDefault: false,
        userInfo: { ...newuserInfo, photo: img }

      }
    });
  }

  updateUserInfo(inputId, inputValue) {
    if (inputValue === '' && inputId === 'name') {
      this.setState(prevState => {
        return {
          userInfo: {
            ...prevState.userInfo,
            name: 'Nombre Apellido'
          }
        }
      })
    } else if (inputValue === '' && inputId === 'job') {
      this.setState(prevState => {
        return {
          userInfo: {
            ...prevState.userInfo,
            job: 'Front-end developer'
          }
        }
      })
    } else {
      this.setState(prevState => {
        return {
          userInfo: {
            ...prevState.userInfo,
            [inputId]: inputValue
          }
        }
      })
    }
  }

  updateUserInfoIcon(inputId, inputValue) {
    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputId]: inputValue
        }
      }
    })
    const InputIcon = document.querySelector(`#icon-${inputId}`);
    if (inputValue !== '') {
      InputIcon.classList.remove('hidden--fill');
    } else {
      InputIcon.classList.add('hidden--fill');
    }
  }

  handleCollapse(targetId) {
    if(targetId !== this.state.activePanel){
      this.setState({activePanel:targetId})
     
    } else {
      this.setState({activePanel: ''})
      
    }
  }

  render() {
    return (
      <div className="CardMaker">
        <Header />
        <main className="main-form">
          <section className="card--preview">
            <CardPreview
              avatar={this.state.profile.avatar}
              cardDetails={this.state.userInfo}
            />
          </section>
          <CardForm
            avatar={this.state.profile.avatar}
            isAvatarDefault={this.isAvatarDefault}
            updateAvatar={this.updateAvatar}
            userInfo={this.state.userInfo}
            updateUserInfo={this.updateUserInfo}
            updateUserInfoIcon={this.updateUserInfoIcon}
            handleCollapse={this.handleCollapse} 
            activePanel={this.state.activePanel}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default CardMaker;