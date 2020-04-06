import React from 'react';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';


class CardForm extends React.Component {
    render() {
        return (
            <div>
                <Design />
                <FormFill />
                <Share />
            </div>
        )
    }
}

export default CardForm;