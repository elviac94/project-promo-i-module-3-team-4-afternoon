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
          <div className="image--preview_text color-palette1" id="image--preview_text">
            <div className="preview--square"></div>
            <div className="card--full">
              <h3 className="card--full_name">{cardDetails.name}</h3>
              <p className="card--full_profession">{cardDetails.job}</p>
            </div>
          </div>
          <div className="image--preview_picture js__profile-image" style={{ backgroundImage: `url(${props.avatar})` }} ></div>
          <div className="image--preview_icons icon-palette1" id="image--preview_icons">
            <div id="icon-phone" className="preview icon--1 hidden--fill"></div>
            <div id="icon-email" className="preview icon--2 hidden--fill"></div>
            <div id="icon-linkedin" className="preview icon--3 hidden--fill"></div>
            <div id="icon-github" className="preview icon--4 hidden--fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

  CardPreview.defaultProps={
  avatar: defaultImage,
  userInfo: {
    name: 'Nombre Apellido',
    job: 'Front-end developer',
  }
  }
  export default CardPreview;
