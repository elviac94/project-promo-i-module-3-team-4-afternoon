import React from 'react';
import Design from './Design';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Design />
      </div>
    );
  }
}

export default App;