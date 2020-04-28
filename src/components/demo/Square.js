import React from 'react';
import gif2 from '../../images/gif2.gif';
import ourtools from '../../images/ourtools.png';
import react1 from '../../images/react1.png';
import sass from '../../images/sass.png';
import markdown from '../../images/markdown.png';
import gityvs from '../../images/gityvs.png';

const Square = () => {
  return (
    <div className="demo__pages--square">
      <div className="square__logo--container">
        <img src={ourtools} alt="square-logo"/>
      </div>
      <h3 className="scrum__subtitle--one">Metodología: filosofía Agile y marco de trabajo Scrum</h3>
      <div className="scrum__container">
        <div className="scrum__image--container">
          <img src={gif2} alt="team-gif" />
        </div>
        <ul>
          <li>Estudiando qué se nos pide: Users Stories</li>
          <li>Planificando qué hacer en cada Sprint y así entregar valor</li>
          <li>Autogestionándonos para cumplir con los objetivos marcados</li>
          <li>Haciendo seguimiento diario </li>
        </ul>
      </div>
      <div className="tecnologies__container">
        <div className="react__image--container">
          <img src={react1}/>
        </div>
        <div className="sass__image--container">
          <img src={sass}/>
        </div>
        <div className="tecnologies__container--info">
          <h3 className="scrum__subtitle--two" >Tecnologías y herramientas empleadas:</h3>
          <h4>React, SASS, GIT, Github, Markdown, JS</h4>
          <p>Trello, Slack, Zoom </p>
        </div>
        <div className="markdown__image--container">
          <img src={markdown}/>
        </div>
        <div className="gityvs__image--container">
          <img src={gityvs}/>
        </div>
      </div>

    </div>
  )
}

export default Square;