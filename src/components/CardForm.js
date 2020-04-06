import React from 'react';
import Design from './Design';
import FormFill from './FormFill';


class CardForm extends React.Component{
    render(){
        return(
          <div>
            <Design/>
            <FormFill/>
          </div>
        )
    }
}

export default CardForm;