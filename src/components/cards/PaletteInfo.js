import React from 'react';


const PaletteInfo = (props) => {
  return (
    <div>
      {/*en className directamente valido la condición para que se muestre una clase u otra */}
      <div className={`color-option${props.colorPalette === '1' ? "red" : props.colorPalette === '2' ? "blue" : "green"}`}>
      </div>
    </div>
  )

}

export default PaletteInfo;