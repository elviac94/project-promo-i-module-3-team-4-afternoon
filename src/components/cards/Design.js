import React from 'react';
import '../../stylesheets/form.scss';

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    }

  handleClick() {
    const designBottom = document.querySelector('.design--bottom')
    designBottom.classList.toggle('hidden');
  }

  handleArrow(){
    const arrow = document.querySelector('.arrow');
    arrow.classList.add('arrow-collapse');
  }

    render() {
        return (
            <div className="form__design">

                <div className="design--top design--top--active" onClick={this.handleClick}>
                    <div className="title-icon">
                        <i className="far fa-object-ungroup"></i>
                        <h3 className="design-title">diseña</h3>
                    </div>
                    <div className="arrow" onClick={this.handleArrow}></div>
                </div>

                <div className="design--bottom">
                    <p className="design-subtitle">colores</p>

                    <div className="color-form">

                        <div>
                            <label id="lab-1" htmlFor="color-option1">
                                <input id="color-option1" type="radio" value="color-option1" name="color-option" />
                                <div className="c1-1"></div>
                                <div className="c1-2"></div>
                                <div className="c1-3"></div>
                            </label>
                        </div>

                        <div>
                            <label id="lab-2" htmlFor="color-option2">
                                <input id="color-option2" type="radio" value="color-option2" name="color-option" />
                                <div className="c2-1"></div>
                                <div className="c2-2"></div>
                                <div className="c2-3"></div>
                            </label>
                        </div>

                        <div>
                            <label id="lab-3" htmlFor="option3">
                                <input id="color-option3" type="radio" value="color-option3" name="color-option" />
                                <div className="c3-1"></div>
                                <div className="c3-2"></div>
                                <div className="c3-3"></div>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}






export default Design;