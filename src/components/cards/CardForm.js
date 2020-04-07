import React from 'react';
import Design from './Design';
import FormFill from './FormFill';
import Share from './Share';


const CardForm =(props) => {
        return (
            <div>
              <section className="card--form">
                <div className="wrapper-general">
                  <form className="complete--form">
                <Design />
                <FormFill 
                  updateName={props.updateName}
                  updateJob={props.updateJob}
                  updatePhone={props.updatePhone}
                  updateEmail={props.updateEmail}
                  updateLinkedin={props.updateLinkedin}
                  updateGithub={props.updateGithub}
                />
                <Share />
                  </form>
                </div>
              </section>
            </div>
        )
}

export default CardForm;