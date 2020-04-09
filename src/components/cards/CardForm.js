import React from 'react';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';
import CollapseItem from './CollapseItem';

const CardForm = (props) => {
  return (
    <div>
      <section className="card--form">
        <div className="wrapper-general">
          <form className="complete--form">
            <div className="collapse-list">
              <CollapseItem collapseTitle = 'Diseña'
                            handleCollapse = {props.handleCollapse}
                            activePanel = {props.activePanel}
                            id = 'collapse-design'
                            icon = 'far fa-object-ungroup'
                            arrow= 'arrow'
              >
                <Design />
              </CollapseItem>
            
              <CollapseItem collapseTitle = 'Rellena'
                            handleCollapse = {props.handleCollapse}
                            activePanel = {props.activePanel}
                            id = 'collapse-fill'
                            icon = 'far fa-keyboard fa-lg'
                            arrow= 'arrow'
              >
                {/* <div className="fill--top fill--top--active">
                  <div className="title--icon">
                    <i className="far fa-keyboard fa-lg"></i>
                    <h3 className="fill--title">Rellena</h3>
                    </div>
                  <div className="arrow"></div>
                </div> */}
                <FormFill
                  avatar={props.avatar}
                  isAvatarDefault={props.isAvatarDefault}
                  updateAvatar={props.updateAvatar}
                  userInfo={props.userInfo}
                  updateUserInfo={props.updateUserInfo}
                  updateUserInfoIcon={props.updateUserInfoIcon}
                />
                </CollapseItem>
                
              <CollapseItem collapseTitle = 'Comparte'
                            handleCollapse = {props.handleCollapse}
                            activePanel = {props.activePanel}
                            id = 'collapse-share'
                            icon = 'fas fa-share-alt'
                            arrow= 'arrow'
              >
                {/* <div className="share--top share--top--active">
                  <div className="share--icon">
                    <i className="fas fa-share-alt"></i>
                    <h3 className="share--title">comparte</h3>
                  </div>
                  <a className="share--button"><div className="arrow"></div></a>
                </div> */}
                <Share />
              </CollapseItem>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CardForm;