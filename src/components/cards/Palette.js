import React from 'react';
import InputRadio from './InputRadio';


const Palette = (props) => {
    return (
        <div className="form__design">

            <div className="design--bottom">
                <p className="design-subtitle">colores</p>

                <div className="color-form"> 

                    <div>
                        <label id="lab-1" htmlFor="color-option1">
                            <InputRadio
                                id="color-option1"
                                type="radio"
                                value="1"
                                name="palette" //color-choice
                                handleInputValue={props.handleInputValue}
                                checked={props.checked === "1" ? true : false}
                            />
                            <div className="c1-1"></div>
                            <div className="c1-2"></div>
                            <div className="c1-3"></div>
                        </label>
                    </div>

                    <div>
                        <label id="lab-2" htmlFor="color-option2">
                            <InputRadio
                                id="color-option2"
                                type="radio"
                                value="2"
                                name="palette"
                                handleInputValue={props.handleInputValue}
                                checked={props.checked === "2" ? true : false}
                            />
                            <div className="c2-1"></div>
                            <div className="c2-2"></div>
                            <div className="c2-3"></div>
                        </label>
                    </div>

                    <div>
                        <label id="lab-3" htmlFor="option3">
                            <InputRadio
                                id="color-option3"
                                type="radio"
                                value="3"
                                name="palette"
                                handleInputValue={props.handleInputValue}
                                checked={props.checked === "3" ? true : false}
                            />
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


export default Palette;