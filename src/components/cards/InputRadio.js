import React from 'react';


const InputRadio = (props) => {

  const updatePaletteInfo = (evt) => {
    props.handleInputValue(evt.currentTarget.name,evt.currentTarget.value)
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={props.id}></label>
      <input type={props.type} 
             name={props.name}
             id={props.id}
             value={props.value}
             onChange={updatePaletteInfo}
             checked={props.checked}
             required
      />
    </div>
  )
}

/* const Palette = (props) => {

    const updatePaletteValue = () => {
        props.handlePaletteValue();
    }

    return (
        <div>
            <label id="lab-1" htmlFor={props.id}></label>
                <input
                    id={props.id}
                    type={props.type}
                    value={props.value}
                    name={props.name}
                    checked={props.checked}
                    onChange={updatePaletteValue}
                />
                <div className="c1-1"></div>
                <div className="c1-2"></div>
                <div className="c1-3"></div>
        </div>

    )
}
 */
export default InputRadio;