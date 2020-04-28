import React from 'react';
import '../stylesheets/main.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import CardMaker from './cards/CardMaker';
import ReactivePalettes from './demo/ReactivePalettes';
import Triangle from './demo/Triangle';
import Square from './demo/Square';
import Circle from './demo/Circle';
import Slash from './demo/Slash';

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
          <Route exact path="/reactivePalettes">
            <ReactivePalettes />
          </Route>
          <Route exact path="/reactivePalettes/Scheme">
            <Triangle />
          </Route>
          <Route exact path="/reactivePalettes/Thecnology">
            <Square />
          </Route>
          <Route exact path="/reactivePalettes/Team">
            <Circle />
          </Route>
          <Route exact path="/reactivePalettes/Code">
            <Slash />
          </Route>
          <Route exact path="/reactivePalettes/Code/CardMaker">
            <Slash />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;