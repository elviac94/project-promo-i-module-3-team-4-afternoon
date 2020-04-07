import React from 'react';
import CollapseItem from './CollapseItem';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';

class CollapseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <div className="collapse-list">
          <CollapseItem collapseTitle = 'Diseña'
            handleCollapse = {this.props.handleCollapse}
            activePanel = {this.props.activePanel}
            id = 'collapse-1'
        >
            <Design />
        </CollapseItem>

        <CollapseItem collapseTitle = 'Rellena'
            handleCollapse = {this.props.handleCollapse}
            activePanel = {this.props.activePanel}
            id = 'collapse-2'
        >
            <FormFill />
        </CollapseItem>

        <CollapseItem collapseTitle = 'Comparte'
            handleCollapse = {this.props.handleCollapse}
            activePanel = {this.props.activePanel}
            id = 'collapse-3'
        >
            <Share />
        </CollapseItem>
        </div>
      )
  }
}

export default CollapseList;