import React from 'react';

const ShareBottomBtnTwitter = (props) => {

        return (
            <div className="created-card--container" ref={props.cardContainer}>
                <div className="border--line"></div>
                <h4 className="created-card--title">La tarjeta ha sido creada:</h4>
                <a href="" className="created-card--link"
                    title="Tarjeta de perfil" ref={props.createdCard}></a>
                <div className="twitter--button">
                <a href={`https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20de%20visita%2C%20creada%20con%20%23AwesomeProfileCards%3A%20${props.cardURL}&hashtags=Adalab%2C%20promoIdelisa`} target="_blank" className="twitter--link" title="Compartir en twitter" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>Compartir en twitter
                    </a>
                </div>
            </div>
        )
}

export default ShareBottomBtnTwitter;