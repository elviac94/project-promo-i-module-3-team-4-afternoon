import React from 'react';

const ShareBottomBtnCard = (props) => {
    const { errorMessage, sendData } = props;
    const handleClick = () => sendData();

    return (
        <div>
            <p id="global-error" className="text-error hidden" ref={errorMessage}>Revisa los campos marcados en rojo.</p>
            <button className="create-card--button create-card--button--active" type="button" onClick={handleClick}>
                <i className="far fa-address-card"></i>
                Crear tarjeta
            </button>

        </div>
    )
}

export default ShareBottomBtnCard;