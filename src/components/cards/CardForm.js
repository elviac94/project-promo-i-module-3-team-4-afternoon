import React from 'react';
import FormFill from './FormFill';
import Share from './Share';


class CardForm extends React.Component{
    render(){
        return(
            <div>
            <FormFill/>
            <Share/>
            </div>
        )
    }
}
export default CardForm;