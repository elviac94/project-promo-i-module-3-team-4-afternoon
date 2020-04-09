import React from 'react';
// import '../../stylesheets/layouts/collapselist.scss';

class CollapseItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayPanel = this.displayPanel.bind(this)
  }

  displayPanel(evt) {
    this.props.handleCollapse(evt.currentTarget.id)
  }

  render() {
    return (
      <div className="collapse-section">
        <div id={this.props.id} onClick={this.displayPanel} className="section-top">
            <div className="title-icon">
              <i className={this.props.icon}></i>
              <h3 className="section-title">{this.props.collapseTitle}</h3>
            </div>
            <div className={this.props.arrow}></div>
          </div>
          <div className={`collapse-item ${this.props.activePanel === this.props.id ? "visible" : ""}`}>
          {/* && "arrow-collapse"  && arrow ? "arrow-collapse : ""*/}
          {this.props.children}
          </div>
      </div>
    );
  }
}

export default CollapseItem;
