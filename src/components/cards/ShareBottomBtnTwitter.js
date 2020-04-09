import React from 'react';

class ShareBottomBtnTwitter extends React.Component {
    render() {
        return (
            <div className="created-card--container created-card--container--visible">
                <h4 className="created-card--title">La tarjeta ha sido creada:</h4>
                <a href="" className="created-card--link"
                    title="Tarjeta de perfil"></a>
                <div className="twitter--button">
                    <a href="https://adalab.es/" className="twitter--link" title="Compartir en twitter">
                        <i className="fab fa-twitter"></i>Compartir en twitter
                    </a>
                </div>
            </div>
        )
    }
}

export default ShareBottomBtnTwitter;