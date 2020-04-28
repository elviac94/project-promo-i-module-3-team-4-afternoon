import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Landing from '../Landing';
import CardMaker from '../cards/CardMaker';
import ourCode from '../../images/ourcode.png';
import logo from '../../images/logo_awesome.svg';
import '../../stylesheets/Slash.scss';

const Slash = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/reactivePalettes/Code">
          <div className="Slash">
            <div className="slash__header">
              <img src={ourCode} alt="our code" />
            </div>
            <div className="slash__landing">
              <Landing />
              <Link className=" slash__landing--btn mainindex__button" to="/reactivePalettes/Code/CardMaker" title="Ir al creador de tarjetas">Comenzar</Link>
            </div>
            <div className="slash__footer"></div>
          </div>
        </Route>
        <Route exact path="/reactivePalettes/Code/CardMaker">
          <div class="slash">
            <div className="slash__header">
              <img src={ourCode} alt="our code" />
            </div>
            <div class="slash__cards">
                <Link className="slash__cards--image image" to='/reactivePalettes/Code' title="Ir al inicio">
                  <img src={logo} alt="logo" />
                </Link>
              <CardMaker />
            </div>
            <div className="slash__footer"></div>
          </div>
        </Route>
      </Switch>
    </div>
  )
}
export default Slash;