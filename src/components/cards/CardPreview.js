import React from 'react';

class CardPreview extends React.Component {
    constructor(props) {
      super(props);
      // Esto habrá que añadirlo desde CardForm
      this.state = {
        name: 'Nombre Apellido',
        job: 'Front-end developer',
        palette: 1
      }

    
}
  
  render() {
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
                    <h3 className="card--full_name">{this.state.name}</h3>
                    <p className="card--full_profession">{this.state.job}</p>
                </div>
            </div>
            <div className="image--preview_picture js__profile-image"></div> 
            {/* Falta añadir para que se vean los iconos */}
            <div className="image--preview_icons icon-palette1" id="image--preview_icons">
                <div id="icon1" className="preview icon--1 hidden--fill"></div>
                <div id="icon2" className="preview icon--2 hidden--fill"></div>
                <div id="icon3" className="preview icon--3 hidden--fill"></div>
                <div id="icon4" className="preview icon--4 hidden--fill"></div>
            </div>
        </div> 
    </div>
        </div>
      );
    }
  }
  
  export default CardPreview;