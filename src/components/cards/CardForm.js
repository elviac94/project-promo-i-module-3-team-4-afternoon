import React from 'react';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';
import CollapseItem from './CollapseItem';

const CardForm = (props) => {
  const {ValidateAll, handleCollapse, activePanel, collapsearrow, handleChoice, userInfo, avatar, isAvatarDefault, updateAvatar, updateUserInfo, updateUserInfoIcon, validateForm, inputEmail, inputErrorEmail, inputThumbnail, inputRef, validateAll, errorMessage, cardContainer, sendData, createdCard, cardURL} = props;
  return (
    <div>
      <section className="card--form">
        <div className="wrapper-general">
          <form className="complete--form" onChange={ValidateAll}>
            <div className="collapse-list">
              <CollapseItem collapseTitle='Diseña'
                handleCollapse={handleCollapse}
                activePanel={activePanel}
                id='collapse-design'
                icon='far fa-object-ungroup'
                collapsearrow={collapsearrow}
                validateAll=''
              >
                <Design
                  handleChoice={handleChoice}
                  userInfo={userInfo.palette} />
              </CollapseItem>

              <CollapseItem collapseTitle='Rellena'
                handleCollapse={handleCollapse}
                activePanel={activePanel}
                id='collapse-fill'
                icon='far fa-keyboard fa-lg'
                collapsearrow={collapsearrow}
                validateAll=''
              >
                <FormFill
                  avatar={avatar}
                  isAvatarDefault={isAvatarDefault}
                  updateAvatar={updateAvatar}
                  userInfo={userInfo}
                  updateUserInfo={updateUserInfo}
                  updateUserInfoIcon={updateUserInfoIcon}
                  validateForm={validateForm}
                  inputEmail={inputEmail}
                  inputErrorEmail={inputErrorEmail}
                  inputThumbnail={inputThumbnail}
                  inputRef={inputRef}
                />
              </CollapseItem>

              <CollapseItem collapseTitle='Comparte'
                handleCollapse={handleCollapse}
                activePanel={activePanel}
                id='collapse-share'
                icon='fas fa-share-alt'
                collapsearrow={collapsearrow}
                validateAll={validateAll}
              >
                <Share
                  errorMessage={errorMessage}
                  cardContainer={cardContainer}
                  sendData={sendData}
                  createdCard={createdCard}
                  cardURL={cardURL}
                />
              </CollapseItem>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
// CardForm.defaultProps = {
//   isCollapseDefault: 'visible'
// }

export default CardForm;