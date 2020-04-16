import React from 'react';
import '../stylesheets/main.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import CardMaker from './cards/CardMaker';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/CardMaker">
            <CardMaker />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;