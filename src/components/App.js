import React from 'react';
import '../stylesheets/main.scss';
import Landing from './Landing';
import Header from './Header';
import CardMaker from './CardMaker';
import CardPreview from './CardPreview';
import Footer from './Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Landing />
        {/* <Header /> */}
        <CardMaker />
        <Footer />
      </div>
    );
  }
}

export default App;