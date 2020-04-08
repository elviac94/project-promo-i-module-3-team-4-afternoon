import React from 'react';
import GetAvatar from '../GetAvatar';
// import '../../stylesheets/form.scss';

class FormFill extends React.Component{
 
  render(){
      return(
        <div className="form__fill">
        <div className="fill--top fill--top--active" >
          <div className="title--icon">
            <i className="far fa-keyboard fa-lg"></i>
            <h3 className="fill--title">Rellena</h3>
          </div>
          <a className="fill--button">
            <div className="arrow"> </div>
          </a>
        </div>

        <div className="fill--bottom fill--bottom--visible">

          <div className="fillform bottom-1">
            <div className="fillform--name">
              <label className="label-fill" htmlFor="firstName">Nombre completo<span className="required">*</span></label>
              <input placeholder="Sally Jill" id="firstName" type="text" name="firstName" className="input-fill input-validation" required/>
              <p className="text-error hidden" id="text-error_name">*Dinos tu nombre por favor.</p>
            </div>
            <div className="fillform--job">
              <label className="label-fill" htmlFor="addjob">Puesto<span className="required">*</span></label>
              <input placeholder="Front-end unicorn" id="addjob" type="text" name="addjob" className="input-fill input-validation"
                required />
              <p className="text-error hidden" id="text-error_job">*Tu trabajo también, gracias.</p>
            </div>
          </div>
          <div className="fillform bottom-2">
            <label className="label-fill" htmlFor="addimage">Imagen de perfil<span className="required">*</span></label>
            <div className="bottom-2-box">
              <GetAvatar
              avatar={this.props.avatar}
              isAvatarDefault={this.props.isAvatarDefault}
              updateAvatar={this.props.updateAvatar}/>
              <p className="text-error hidden" id="text-error_image">*Sube una imagen.</p>
              <label className="label-fill" htmlFor="addimage"></label>
              
          </div>
          <div className="fillform bottom-3">
            <div className="fillform--email">
              <label className="label-fill" htmlFor="addemail">Email<span className="required">*</span></label>
              <input placeholder="sally-hill@gmail.com" id="addemail" type="email" name="addemail" className="input-fill input-validation"
                required />
              <p className="text-error hidden" id="text-error_email">*Deja tu email para que puedan contactarte.</p>
            </div>
            <div className="fillform--phone">
              <label className="label-fill" htmlFor="addphone">Teléfono</label>
              <input placeholder="660632407" className="input-fill input-correct input-validation" id="addphone" type="tel"
                name="addphone" />
            </div>
            <div className="fillform--linkedin">
              <label className="label-fill" htmlFor="addlinkedin">Linkedin<span className="required">*</span></label>
              <input placeholder="linkedin.com/in/unicornfront" id="addlinkedin" type="text" name="addlinkedin"
                className="input-fill input-validation" required />
              <p className="text-error hidden" id="text-error_linkedin">*Por favor introduce tu Linkedin.</p>
            </div>
            <div className="fillform--github">
              <label className="label-fill" htmlFor="addgithub">Github<span className="required">*</span></label>
              <input placeholder="@sallyhill" id="addgithub" type="text" name="addgithub" className="input-fill input-validation" required />
              <p className="text-error hidden" id="text-error_git">*Agradecerán ver tu trabajo.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
          
     );
  }

}
export default FormFill;