import React from 'react';
import '../stylesheets/main.scss';
import Landing from './Landing';
import CardMaker from './cards/CardMaker';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Landing />
        <CardMaker />
      </div>
    );
  }
}

export default App;