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
        palette: '1',
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
    this.inputThumbnail = React.createRef();
    this.inputEmail = React.createRef();
    this.inputRef = React.createRef();
    this.errorMessage = React.createRef();
    this.cardContainer = React.createRef();
    this.createdCard = React.createRef();
    this.initialState = this.state;
    this.handleChoice = this.handleChoice.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.updateUserInfoIcon = this.updateUserInfoIcon.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.validateForm = this.validateForm.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);

    this.validateAll = this.validateAll.bind(this);
    this.sendData = this.sendData.bind(this);
    this.showURL = this.showURL.bind(this);
    this.resetInfo = this.resetInfo.bind(this);
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

  validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.userInfo.email) === true) {
      this.inputEmail.current.classList.remove("input-error");
      this.inputEmail.current.classList.add("input-correct");
      this.inputEmail.current.nextSibling.classList.add("hidden")
      return true
    } else {
      this.inputEmail.current.classList.remove("input-correct");
      this.inputEmail.current.nextSibling.classList.remove("hidden")
      this.inputEmail.current.classList.add("input-error");
      return false
    }
  }

  validateImage() {
    if 
    (this.state.userInfo.photo === defaultImage) {
    // (/\.(gif|jpeg|jpg|png)$/i.test(this.state.userInfo.photo) === false) {
      this.inputThumbnail.current.classList.remove("input-correct")
      this.inputThumbnail.current.previousSibling.previousSibling.classList.remove('hidden');
      this.inputThumbnail.current.classList.add("input-error")
      return false
    } else {
      this.inputThumbnail.current.classList.remove("input-error")
      this.inputThumbnail.current.classList.add("input-correct")
      this.inputThumbnail.current.previousSibling.previousSibling.classList.add('hidden');
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

  validateForm(input) {
    console.log(input)
    if (input.name !== 'email' && input.value !== '') {
      input.classList.remove("input-error");
      input.nextSibling.classList.add("hidden");
      input.classList.add("input-correct");
    }
  }

  validateAll(evt) {
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

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state.userInfo));
    // this.validateAll()
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'));
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
      this.updateIcon('email', true)
      this.updateIcon('phone', true)
      this.updateIcon('linkedin', true)
      this.updateIcon('github', true)
    }
  }

  resetInfo() {
    this.setState(this.initialState);
    this.updateIcon('email', false);
    this.updateIcon('phone', false);
    this.updateIcon('linkedin', false);
    this.updateIcon('github', false);
  }

  render() {
    return (
      <div className="CardMaker">
        <Header />
        <main className="main-form">
          <section className="card--preview">
            <CardPreview
              palette={this.state.userInfo.palette}
              avatar={this.state.profile.avatar}
              cardDetails={this.state.userInfo}
              resetInfo={this.resetInfo}
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
            inputEmail={this.inputEmail}
            inputThumbnail={this.inputThumbnail}
            inputRef={this.inputRef}
          />
        </main>
        <Footer />
      </div>
    )
  }
}

export default CardMaker;