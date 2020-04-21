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
      collapsearrow: 'collapse-design',
      formValidation: {
        name: 'false',
        job: 'false',
        image: 'false',
        email: 'false',
        linkedin: 'false',
        github: 'false'
      }
    }
    this.errorMessage = React.createRef();
    this.cardContainer = React.createRef();
    this.createdCard = React.createRef();
    this.handleChoice = this.handleChoice.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.updateUserInfoIcon = this.updateUserInfoIcon.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.sendData = this.sendData.bind(this);
    this.showURL = this.showURL.bind(this);
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
    if (input.name === "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        input.classList.remove("input-error");
        input.classList.add("input-correct");
        message.classList.add("hidden")
        this.setState((prevState => {
          return {
            formValidation: {
              ...prevState.formValidation,
              email: 'true'
            }
          }
        }))
      } else {
        input.classList.remove("input-correct");
        message.classList.remove("hidden")
        input.classList.add("input-error");
        this.setState((prevState => {
          return {
            formValidation: {
              ...prevState.formValidation,
              email: 'false'
            }
          }
        }))
      }
    } else if (input.name === "image") {
      const thumbnail = message.nextSibling.nextSibling
      if (/\.(gif|jpeg|jpg|png)$/i.test(input.value) === false) {
        thumbnail.classList.remove("input-correct")
        message.classList.remove('hidden');
        thumbnail.classList.add("input-error")
        this.setState((prevState => {
          return {
            formValidation: {
              ...prevState.formValidation,
              image: 'false'
            }
          }
        }))
      } else {
        thumbnail.classList.remove("input-error")
        thumbnail.classList.add("input-correct")
        message.classList.add('hidden');
        this.setState((prevState => {
          return {
            formValidation: {
              ...prevState.formValidation,
              image: 'true'
            }
          }
        }))
      }
    } else if (input.value !== "") {
      input.classList.remove("input-error");
      input.classList.add("input-correct");
      message.classList.add("hidden")
      this.setState((prevState => {
        return {
          formValidation: {
            ...prevState.formValidation,
            [input.name]: 'true'
          }
        }
      }))
    } else {
      input.classList.remove("input-correct");
      message.classList.remove("hidden")
      input.classList.add("input-error");
      this.setState((prevState => {
        return {
          formValidation: {
            ...prevState.formValidation,
            [input.name]: 'false'
          }
        }
      }))
    };

    // this.validateAll(input)
  }

  validateAll(evt) {
    const {name, job, image, email, linkedin, github} = this.state.formValidation;
    const errorMessage = this.errorMessage.current;
    const createButton = errorMessage.nextSibling;
    if (name === 'true' && job === 'true' && image === 'true' && email === 'true' && linkedin === 'true' && github === 'true') {
      errorMessage.classList.add('hidden')
      createButton.classList.remove('create-card--button--active')
      createButton.disabled = false
    } else {
      errorMessage.classList.remove('hidden')
      createButton.classList.add('create-card--button--active')
      createButton.disabled = true
    }
  }

  sendData() {
    const urlBase = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
    fetch(urlBase, {
      method: 'POST',
      body: localStorage.getItem('Details'),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => this.showURL(data))
      .catch(function (error) { console.log(error) })
  }

  showURL(data) {
    const cardContainer = this.cardContainer.current;
    if (data.success) {
      this.createdCard.current = `<a class="final__link" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
      cardContainer.classList.add('created-card--container--visible')
      // this.twitterShare()
    } else {
      this.createdCard.current.innerHTML = 'ERROR:' + data.error;
    }
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
            validateAll={this.validateAll}
            errorMessage={this.errorMessage}
            cardContainer={this.cardContainer}
            sendData={this.sendData}
            createdCard={this.createdCard}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default CardMaker;