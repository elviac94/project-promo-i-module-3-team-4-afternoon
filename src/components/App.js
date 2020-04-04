import React from 'react';
import '../stylesheets/main.scss';
import Landing from './Landing';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Landing />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;