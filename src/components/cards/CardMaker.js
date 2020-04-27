import React from 'react';
import CardForm from './CardForm';
import Header from '../Header';
import Footer from '../Footer';
import CardPreview from './CardPreview'
import defaultImage from '../DefaultImage';
import { Link } from 'react-router-dom';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: '1',
        name: '',
        job: '',
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
      cardURL: '',
    }
    this.initialState = this.state;
    this.handleChoice = this.handleChoice.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.updateUserInfoIcon = this.updateUserInfoIcon.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.resetInfo = this.resetInfo.bind(this);

    this.validateForm = this.validateForm.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.sendData = this.sendData.bind(this);
    this.showURL = this.showURL.bind(this);
    this.inputThumbnail = React.createRef();
    this.inputEmail = React.createRef();
    this.errorMessage = React.createRef();
    this.cardContainer = React.createRef();
    this.createdCard = React.createRef();
  }

  handleChoice(target) {
    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
          palette: target.value
        }
      }
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
            // name: 'Nombre Apellido'
            name: inputValue
          }
        }
      })
    } else if (inputValue === '' && inputId === 'job') {
      this.setState(prevState => {
        return {
          userInfo: {
            ...prevState.userInfo,
            // job: 'Front-end developer'
            job: inputValue
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
    const addIcon = (inputValue !== '');
    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputId]: inputValue
        }
      }
    })
    this.updateIcon(inputId, addIcon);
  }

  updateIcon(inputId, addIcon) {
    const InputIcon = document.querySelector(`#icon-${inputId}`);
    if (addIcon) {
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

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state.userInfo));
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'));
    const { updateIcon } = this;
    if (data !== null) {
      this.setState({
        userInfo: {
          palette: data.palette,
          name: data.name,
          job: data.job,
          email: data.email,
          phone: data.phone,
          linkedin: data.linkedin,
          github: data.github,
          photo: data.photo !== '' ? data.photo : defaultImage
        },
        profile: {
          avatar: data.photo
        },
        isAvatarDefault: data.photo !== defaultImage ? false : true,
      })
      if (data.email !== '') {
        updateIcon('email', true)
      }
      if (data.phone !== '') {
        updateIcon('phone', true)
      }
      if (data.linkedin !== '') {
        updateIcon('linkedin', true)
      }
      if (data.github !== '') {
        updateIcon('github', true)
      }
    }
  }

  resetInfo() {
    const { updateIcon } = this;
    this.setState(this.initialState);
    updateIcon('email', false);
    updateIcon('phone', false);
    updateIcon('linkedin', false);
    updateIcon('github', false);
  }

  validateEmail() {
    const { inputEmail } = this;
    const { userInfo } = this.state;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInfo.email) === true) {
      inputEmail.current.classList.remove("input-error");
      inputEmail.current.classList.add("input-correct");
      inputEmail.current.nextSibling.classList.add("hidden")
      return true
    } else {
      inputEmail.current.classList.remove("input-correct");
      inputEmail.current.nextSibling.classList.remove("hidden")
      inputEmail.current.classList.add("input-error");
      return false
    }
  }

  validateImage() {
    const { inputThumbnail } = this;
    if
      (this.state.userInfo.photo === defaultImage) {
      inputThumbnail.current.classList.remove("input-correct")
      inputThumbnail.current.previousSibling.previousSibling.classList.remove('hidden');
      inputThumbnail.current.classList.add("input-error")
      return false
    } else {
      inputThumbnail.current.classList.remove("input-error")
      inputThumbnail.current.classList.add("input-correct")
      inputThumbnail.current.previousSibling.previousSibling.classList.add('hidden');
      return true
    }
  }

  validateInputs() {
    const inputFill = document.querySelectorAll('.input-fill');
    for (let myInput of inputFill) {
      if (myInput.value === "" && myInput.required !== false) {
        myInput.classList.remove("input-correct");
        myInput.classList.add("input-error");
        myInput.nextSibling.classList.remove("hidden");
      } else {
        myInput.classList.remove("input-error");
        myInput.nextSibling.classList.add("hidden");
        myInput.classList.add("input-correct");
      };
    }
  }

  validateForm(input, message) {
    console.log(input)
    if (input.name !== 'email' && input.value !== '') {
      input.classList.remove("input-error");
      message.classList.add("hidden");
      input.classList.add("input-correct");
    } else {
      input.classList.remove("input-correct");
      input.classList.add("input-error");
      message.classList.remove("hidden");
    }
  }

  validateAll() {
    this.validateEmail()
    this.validateImage()
    this.validateInputs()
    console.log('validateInputs', this.validateInputs())
    const { name, job, image, email, linkedin, github } = this.state.userInfo;
    const errorMessage = this.errorMessage.current;
    const createButton = errorMessage.nextSibling;
    if (this.validateEmail() === true && this.validateImage() === true && name !== '' && job !== '' && linkedin !== '' && github !== '') {
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
      body: localStorage.getItem('data'),
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
      this.setState({ cardURL: data.cardURL })
      this.createdCard.current.innerHTML = `<a class="final__link" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
      cardContainer.classList.add('created-card--container--visible')
    } else {
      this.createdCard.current.innerHTML = 'ERROR:' + data.error;
    }
  }

  render() {
    const { userInfo, profile, palette, isAvatarDefault, activePanel, collapsearrow, cardURL } = this.state;
    const { resetInfo, handleChoice, updateAvatar, updateUserInfo, updateUserInfoIcon, validateForm, handleCollapse, validateAll, errorMessage, cardContainer, sendData, createdCard, inputEmail, inputThumbnail, inputRef } = this;
    return (
      <div className="CardMaker">
        <Header />
        <main className="main-form">
          <section className="card--preview">
            <CardPreview
              palette={userInfo.palette}
              avatar={profile.avatar}
              cardDetails={userInfo}
              resetInfo={resetInfo}
            />
          </section>
          <CardForm
            handleChoice={handleChoice}
            palette={palette}
            avatar={profile.avatar}
            isAvatarDefault={isAvatarDefault}
            updateAvatar={updateAvatar}
            userInfo={userInfo}
            updateUserInfo={updateUserInfo}
            updateUserInfoIcon={updateUserInfoIcon}
            validateForm={validateForm}
            handleCollapse={handleCollapse}
            activePanel={activePanel}
            collapsearrow={collapsearrow}
            validateAll={validateAll}
            errorMessage={errorMessage}
            cardContainer={cardContainer}
            sendData={sendData}
            createdCard={createdCard}
            inputEmail={inputEmail}
            inputThumbnail={inputThumbnail}
            inputRef={inputRef}
            cardURL={cardURL}
          />
        </main>
        <Link to="/reactivePalettes" title="Saber más del proyecto">
          <Footer />
        </Link>
      </div>
    )
  }
}

export default CardMaker;