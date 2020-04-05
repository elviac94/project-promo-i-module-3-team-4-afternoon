import React from 'react';
import CardMaker from './cards/CardMaker'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CardMaker />
      </div>
    );
  }
}

export default App;