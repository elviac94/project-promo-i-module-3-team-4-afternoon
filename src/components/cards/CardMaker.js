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
      palette: '1',
      userInfo: {
        name: 'Nombre Apellido',
        job: 'Front-end developer',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: defaultImage
      },
      profile: {
        avatar: defaultImage
      },
      isAvatarDefault: true,
      activePanel: 'collapse-design',
      collapsearrow: 'collapse-design'
    }
    this.handleChoice = this.handleChoice.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.updateUserInfoIcon = this.updateUserInfoIcon.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChoice(target) {
    this.setState((prevState) => {
      return (prevState.palette = target.value);
    });
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
    if (targetId !== this.state.activePanel) {
      this.setState({ activePanel: targetId })
      this.setState({ collapsearrow: targetId })
    } else {
      this.setState({ activePanel: '' })
      this.setState({ collapsearrow: '' })
    }
  }

  validateForm(input, message) {
    // console.log(input)
    if (input.name === "email") {
      console.log(input.value)
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        message.classList.add('hidden');
        return (true);
      } else {
        message.classList.remove('hidden');
        return (false);
      } 
    } else if (input.name === "image") {
      const thumbnail = message.nextSibling.nextSibling
      if (/\.(gif|jpeg|jpg|png)$/i.test(input.value) === false) {
        
        console.log(thumbnail)
        message.classList.remove('hidden');
        thumbnail.classList.remove("input-correct")
        thumbnail.classList.add("input-error")
      } else {
        message.classList.add('hidden');
        thumbnail.classList.remove("input-error")
        thumbnail.classList.add("input-correct")
      }
    } else if (input.value !== "") {
      input.classList.remove("input-error");
      input.classList.add("input-correct");
      message.classList.add("hidden")
      console.log(input.value)
    } else {
      input.classList.remove("input-correct");
      input.classList.add("input-error");
      message.classList.remove("hidden")
    };
  }

  render() {
    return (
      <div className="CardMaker">
        <Header />
        <main className="main-form">
          <section className="card--preview">
            <CardPreview
              paletteValue=""
              palette={this.state.palette}
              avatar={this.state.profile.avatar}
              cardDetails={this.state.userInfo}
            />
          </section>
          <CardForm
            handleChoice={this.handleChoice}
            palette={this.state.palette}
            avatar={this.state.profile.avatar}
            isAvatarDefault={this.state.isAvatarDefault}
            updateAvatar={this.updateAvatar}
            userInfo={this.state.userInfo}
            updateUserInfo={this.updateUserInfo}
            updateUserInfoIcon={this.updateUserInfoIcon}
            validateForm={this.validateForm}
            handleCollapse={this.handleCollapse}
            activePanel={this.state.activePanel}
            collapsearrow={this.state.collapsearrow}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default CardMaker;