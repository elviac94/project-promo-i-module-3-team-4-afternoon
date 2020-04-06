import React from 'react';
import '../stylesheets/main.scss';
import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';
import CardMaker from './CardMaker';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* <Landing/> */}
        <CardMaker />
            
      </div>
    );
  }
}

export default App;