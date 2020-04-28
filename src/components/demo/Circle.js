import React from 'react';
import '../../stylesheets/layouts/_circle.scss'
import maria from '../../images/maria.png';
import soraya from '../../images/soraya.png';
import elvira from '../../images/elvira.png';
import romi from '../../images/romi.png';
import ourteam from '../../images/ourteam.png';
import teamwork from '../../images/teamwork.png';

const Circle = () => {
  return (
    <div className="circle__container">
      <img src={ourteam}></img>
      <h1>About us</h1>
      <div className="circle__team">
        <div className="circle__team--card">
          <img src={maria}></img>
          <div className="circle__team--description">
            <h2>María</h2>
            <h4>"The Conflict Slayer"</h4>
            <p>Beign detail-oriented, she will always find an elegant solution to a problem, however big it might be.
            </p>
          </div>
        </div>
        <div className="circle__team--card">
          <img src={soraya}></img>
          <div className="circle__team--description">
            <h2>Soraya</h2>
            <h4>"The Commiter"</h4>
            <p>Driven by her coding passion, she won't rest until she unfolds the inner truth of a given task.
            </p>
          </div>
        </div>
        <div className="circle__team--card">
          <img src={elvira}></img>
          <div className="circle__team--description">
            <h2>Elvira</h2>
            <h4>"The Debugger"</h4>
            <p>Her logical mind and precision, will hack any obstacle on the way of the team's main goal.
            </p>
          </div>
        </div>
        <div className="circle__team--card">
          <img src={romi}></img>
          <div className="circle__team--description">
            <h2>Romina</h2>
            <h4>"The Artbow"</h4>
            <p>Her inventions will brighten up the pathway when the horizon turns ominous.
            </p>
          </div>
        </div>
      </div>
      <h1>Challenges</h1>
      <div className="circle__challenges">
        <img src={teamwork}></img>
      </div>
      <h1>Achievements</h1>
      <div className="circle__achievements">
        <h3>🚀</h3>
        <div className="circle__achievements--levelup">
          <p>LEVEL UP</p>
          <ul>
            <li>+EXP React.js</li>
            <li>+EXP Refactoring</li>
            <li>+EXP Team Work</li>
            <li>+EXP Remote skills</li>
            <li>+ GRIT</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Circle;