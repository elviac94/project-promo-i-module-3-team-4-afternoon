import React from 'react';
import '../stylesheets/main.scss';
import Landing from './Landing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;