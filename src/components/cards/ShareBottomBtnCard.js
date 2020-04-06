import React from 'react';

class ShareBottomBtnCard extends React.Component {
    render() {
        return (
            <div>
                <p id="global-error" className="text-error hidden">Revisa los campos marcados en rojo.</p>
                <button className="create-card--button" type="button">
                    <i className="far fa-address-card"></i>
                        Crear tarjeta
            </button>
            
            </div>
        )
    }
}

export default ShareBottomBtnCard;