import React from 'react';
import { Link } from 'react-router-dom';
import triangle from '../../images/triangle.png';
import square from '../../images/square.png';
import circle from '../../images/circle.png';
import slash from '../../images/slash.png';
import teamname from '../../images/teamname.png';
import '../../stylesheets/ReactivePalettes.scss';

const ReactivePalettes = () => {
  return (
    <div className="ReactivePalettes">
      <div className="logo">
        <div className="logo__shapes">
          <Link to="/reactivePalettes/Scheme" title="Estructura">
            <div className="shape triangle">
              <img src={triangle} alt="triángulo logo" />
            </div>
          </Link>
          <Link to="/reactivePalettes/Thecnology" title="Tecnología">
            <div className="shape square">
              <img src={square} alt="cuadrado logo" />
            </div>
          </Link>
          <Link to="/reactivePalettes/Team" title="Equipo">
            <div className="shape circle">
              <img src={circle} alt="círculo logo" />
            </div>
          </Link>
          <Link to="/reactivePalettes/Code" title="Web">
            <div className="shape bar">
              <img src={slash} alt="barra logo" />
            </div>
          </Link>
        </div>
        <Link to="/" title="Salir">
        <div className="logo__name">
          <img src={teamname} alt="nombre equipo" />
        </div>
        </Link>
    </div>
    </div >
  )
}

export default ReactivePalettes;