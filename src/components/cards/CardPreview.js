import React from 'react';
import defaultImage from '../DefaultImage';

const CardPreview = (props) => {
  const {cardDetails, palette, resetInfo, avatar} = props;
  const {name, job, phone, email, linkedin, github } = cardDetails;

  const getDefaultName=()=>{
    let nameDefault = name
    if(nameDefault ===''){
      nameDefault='Nombre Apellido'
    }
    return nameDefault
  }

  const getDefaultJob=()=>{
    let jobDefault = job
    if(jobDefault ===''){
      jobDefault='Front-end developer'
    }
    return jobDefault
  }

  let paletteValue = palette
  const selectColor = () => {
    if (paletteValue === '1') {
      return ' color-palette1'
    }
    if (paletteValue === '2') {
      return ' color-palette2'
    }
    if (paletteValue === '3') {
      return ' color-palette3'
    }
  }

  let paletteIcon = palette
  const selectColorIcon = () => {
    if (paletteIcon === '1') {
      return ' icon-palette1'
    }
    if (paletteIcon === '2') {
      return ' icon-palette2'
    }
    if (paletteIcon === '3') {
      return ' icon-palette3'
    }
  }

  return (
    <div className="CardPreview">
      <div className="box--preview">
        <button className="button--preview" onClick={resetInfo}>
          <i className="far fa-trash-alt"></i> Reset
        </button>
        <div className="image--preview">
          <div className={`image--preview_text ${selectColor()}`} id="image--preview_text">
            <div className={`preview--square ${selectColor()}`}></div>
            <div className="card--full">
              <h3 className="card--full_name">{getDefaultName()}</h3>
              <p className="card--full_profession">{getDefaultJob()}</p>
            </div>
          </div>
          <div className="image--preview_picture js__profile-image" style={{ backgroundImage: `url(${avatar})` }} ></div>
          <div className={`image--preview_icons ${selectColorIcon()}`} id="image--preview_icons">
            <a id="icon-phone" className="preview icon--1 hidden--fill" href={`tel:${phone}`} target="_blank" title="Teléfono" rel="noopener noreferrer"></a>
            <a id="icon-email" className="preview icon--2 hidden--fill" href={`mailto:${email}`} target="_blank" title="Email" rel="noopener noreferrer"></a>
            <a id="icon-linkedin" className="preview icon--3 hidden--fill" href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" title="Linkedin" rel="noopener noreferrer"></a>
            <a id="icon-github" className="preview icon--4 hidden--fill" href={`https://www.github.com/${github}`} target="_blank" title="Github" rel="noopener noreferrer"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

CardPreview.defaultProps = {
  avatar: defaultImage,
  //palette: '1',
  //paletteIcon: '1',
  userInfo: {
    name: 'Nombre Apellido',
    job: 'Front-end developer',
  }
}

export default CardPreview;
