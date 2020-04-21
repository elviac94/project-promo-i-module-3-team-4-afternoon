import React from 'react';

const ShareBottomBtnTwitter = (props) => {
        return (
            <div className="created-card--container" ref={props.cardContainer}>
                <div className="border--line"></div>
                <h4 className="created-card--title">La tarjeta ha sido creada:</h4>
                <a href="" className="created-card--link"
                    title="Tarjeta de perfil" ref={props.createdCard}></a>
                <div className="twitter--button">
                    <a href="https://adalab.es/" className="twitter--link" title="Compartir en twitter">
                        <i className="fab fa-twitter"></i>Compartir en twitter
                    </a>
                </div>
            </div>
        )
}

export default ShareBottomBtnTwitter;