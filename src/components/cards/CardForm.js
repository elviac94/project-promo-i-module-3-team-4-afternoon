import React from 'react';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';


class CardForm extends React.Component {
    render() {
        return (
            <div>
              <section className="card--form">
                <div className="wrapper-general">
                  <form className="complete--form">
                <Design />
                <FormFill
                 avatar={this.props.avatar}
                 isAvatarDefault={this.props.isAvatarDefault}
                 updateAvatar={this.props.updateAvatar} />
                <Share />
                  </form>
                </div>
              </section>
            </div>
        )
    }
}

export default CardForm;