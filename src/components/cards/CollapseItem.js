import React from 'react';

class CollapseItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayPanel = this.displayPanel.bind(this)
  }

  displayPanel(evt) {
    const {handleCollapse, validateAll} = this.props;
    handleCollapse(evt.currentTarget.id)
    if(evt.currentTarget.id === 'collapse-share') {
      validateAll(evt)
    } 
  }

  render() {
    const {id, activePanel, icon, collapseTitle, collapsearrow, children} = this.props;
    const {displayPanel} = this;
    return (
      <div className="collapse-section">
        <div id={id} onClick={displayPanel} className={`section-top ${activePanel === id ? "section-top__noborder" : "section-top__border"}`}>
            <div className="title-icon">
              <i className={icon}></i>
              <h3 className="section-title">{collapseTitle}</h3>
            </div>
            <div className={`arrow ${collapsearrow === id ? "arrow-active" : ""}`}></div>
          </div>
          <div className={`collapse-item ${activePanel === id ? "visible" : ""}`}>
            {children}
          </div>
      </div>
    );
  }
}

export default CollapseItem;
