import React from 'react';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';

const CardForm = (props) => {
  return (
    <div>
      <section className="card--form">
        <div className="wrapper-general">
          <form className="complete--form">
            <Design />
            <FormFill
              avatar={props.avatar}
              isAvatarDefault={props.isAvatarDefault}
              updateAvatar={props.updateAvatar}
              userInfo={props.userInfo}
              updateUserInfo={props.updateUserInfo}
              updateUserInfoIcon={props.updateUserInfoIcon}
            />
            <Share />
          </form>
        </div>
      </section>
    </div>
  )
}

export default CardForm;