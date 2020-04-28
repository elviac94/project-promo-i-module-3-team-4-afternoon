import React from 'react';
import gif2 from '../../images/gif2.gif'

const Square = () => {
  return (
    <div className="demo__pages square">
      <h2>Metodologías y tecnologías</h2>
      <h3>Marco de trabajo: metodología Scrum</h3>
      <div className="scrum__image--container">
        <img src={gif2} />
      </div>
    </div>
  )
}

export default Square;