import React from 'react';
import '../stylesheets/form.scss';

class Design extends React.Component {
    render() {
        return (
            <div className="form__design">

                <div className="design--top">
                    <div className="title-icon">
                        <i className="far fa-object-ungroup"></i>
                        <h3 className="design-title">diseña</h3>
                    </div>
                    <a className="arrow"></a>
                </div>

                <div className="design--bottom--visible">
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