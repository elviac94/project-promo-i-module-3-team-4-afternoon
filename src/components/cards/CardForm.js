import React from 'react';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';
import CollapseItem from './CollapseItem';

const CardForm = (props) => {
  // console.log(props)
  return (
    <div>
      <section className="card--form">
        <div className="wrapper-general">
          <form className="complete--form" onChange={props.ValidateAll}>
            <div className="collapse-list">
              <CollapseItem collapseTitle='Diseña'
                handleCollapse={props.handleCollapse}
                activePanel={props.activePanel}
                id='collapse-design'
                icon='far fa-object-ungroup'
                collapsearrow={props.collapsearrow}
                validateAll={props.validateAll}
              >
                <Design
                  handleChoice={props.handleChoice}
                  userInfo={props.userInfo.palette} />
              </CollapseItem>

              <CollapseItem collapseTitle='Rellena'
                handleCollapse={props.handleCollapse}
                activePanel={props.activePanel}
                id='collapse-fill'
                icon='far fa-keyboard fa-lg'
                collapsearrow={props.collapsearrow}
                validateAll={props.validateAll}
              >
                <FormFill
                  avatar={props.avatar}
                  isAvatarDefault={props.isAvatarDefault}
                  updateAvatar={props.updateAvatar}
                  userInfo={props.userInfo}
                  updateUserInfo={props.updateUserInfo}
                  updateUserInfoIcon={props.updateUserInfoIcon}
                  validateForm={props.validateForm}
                />
              </CollapseItem>

              <CollapseItem collapseTitle='Comparte'
                handleCollapse={props.handleCollapse}
                activePanel={props.activePanel}
                id='collapse-share'
                icon='fas fa-share-alt'
                collapsearrow={props.collapsearrow}
                validateAll={props.validateAll}
              >
                <Share
                  errorMessage={props.errorMessage}
                  cardContainer={props.cardContainer}
                  sendData={props.sendData}
                  createdCard={props.createdCard}
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