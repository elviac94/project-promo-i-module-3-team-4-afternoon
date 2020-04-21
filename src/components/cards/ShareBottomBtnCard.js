import React from 'react';

const ShareBottomBtnCard = (props) => {

    function handleClick() {
        props.sendData()
    }

        return (
            <div>
                <p id="global-error" className="text-error hidden" ref={props.errorMessage}>Revisa los campos marcados con *.</p>
                <button className="create-card--button create-card--button--active" type="button" onClick={handleClick}>
                    <i className="far fa-address-card"></i>
                        Crear tarjeta
            </button>
            
            </div>
        )
}

export default ShareBottomBtnCard;