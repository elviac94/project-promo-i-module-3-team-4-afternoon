import React from 'react';
import defaultImage from '../DefaultImage';

const CardPreview = (props) => {
  const cardDetails = props.cardDetails
 
  return (
    <div className="CardPreview">
      <div className="box--preview">
        <button className="button--preview">
          <i className="far fa-trash-alt"></i> Reset
        </button>
        <div className="image--preview">
          <div className={`image--preview_text ${props.palette}`} id="image--preview_text">
            <div className={`preview--square ${props.palette}`}></div>
            <div className="card--full">
              <h3 className="card--full_name">{cardDetails.name}</h3>
              <p className="card--full_profession">{cardDetails.job}</p>
            </div>
          </div>
          <div className="image--preview_picture js__profile-image" style={{ backgroundImage: `url(${props.avatar})` }} ></div>
          <div className="image--preview_icons icon-palette1" id="image--preview_icons">
            <a id="icon-phone" className="preview icon--1 hidden--fill" href={`tel:${cardDetails.phone}`} target="_blank" title="Teléfono"></a>
            <a id="icon-email" className="preview icon--2 hidden--fill" href={`mailto:${cardDetails.email}`} target="_blank" title="Email"></a>
            <a id="icon-linkedin" className="preview icon--3 hidden--fill" href={`https://www.linkedin.com/in/${cardDetails.linkedin}`} target="_blank" title="Linkedin"></a>
            <a id="icon-github" className="preview icon--4 hidden--fill" href={`https://www.github.com/${cardDetails.github}`} target="_blank" title="Github"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

  CardPreview.defaultProps={
  avatar: defaultImage,
  paletteValue: '1',
  userInfo: {
    name: 'Nombre Apellido',
    job: 'Front-end developer',
  }
  }
  export default CardPreview;
