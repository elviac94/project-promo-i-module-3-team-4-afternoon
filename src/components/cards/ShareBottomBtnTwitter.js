import React from 'react';

class ShareBottomBtnTwitter extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div className="created-card--container created-card--container--visible">
                <h4 className="created-card--title">La tarjeta ha sido creada:</h4>
                <a href="" className="created-card--link"
                    title="Tarjeta de perfil"></a>
                <div className="twitter--button">
                    {/* Esperando props de la URL de la tarjeta */}
                    {/* {`https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20de%20visita%2C%20creada%20con%20%23AwesomeProfileCards%3A%20${props.URL}&hashtags=Adalab%2C%20promoIdelisa`} */}
                <a href="adalab.es" className="twitter--link" title="Compartir en twitter">
                        <i className="fab fa-twitter"></i>Compartir en twitter
                    </a>
                </div>
            </div>
        )
    }
}

export default ShareBottomBtnTwitter;