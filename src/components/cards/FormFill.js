import React from 'react';
import Input from './Input';

const FormFill = (props) => {
    return (
      <div className="form__fill">
        <div className="fill--top fill--top--active">
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
            <Input
              id='name'
              input='Nombre completo'
              required='required'
              requiredIcon='*'
              placeholder='Sally Jill'
              type='text'
              textError='text-error'
              errorMessage='*Dinos tu nombre por favor.'
              handleClick={props.updateName}
            />
            <Input
              id='job'
              input='Puesto'
              required='required'
              requiredIcon='*'
              placeholder='Front-end unicorn'
              type='text'
              textError='text-error'
              errorMessage='*Tu trabajo también, gracias.'
              handleClick={props.updateJob}
            />
          </div>
          <div className="fillform bottom-2">
            <label className="label-fill" htmlFor="image">Imagen de perfil<span className="required">*</span></label>
            <div className="bottom-2-box">
              <button className="buttonform--image js__profile-trigger">Añadir imagen</button>
              <div className="thumbnail js__profile-preview"></div>
              <p className="text-error hidden" id="text-error_image">*Sube una imagen.</p>
              <label className="label-fill" htmlFor="image"></label>
              <input id="image-input" type="file" name="image" className="action__hiddenField js__profile-upload-btn"
                required />
            </div>
            <Input
              id='email'
              input='Email'
              required='required'
              requiredIcon='*'
              placeholder='sally-hill@gmail.com'
              type='email'
              textError='text-error'
              errorMessage='*Deja tu email para que puedan contactarte.'
              handleClick={props.updateEmail}
            />
            <Input
              id='phone'
              input='Teléfono'
              placeholder='660632407'
              type='tel'
              handleClick={props.updatePhone}
            />
            <Input
              id='linkedin'
              input='Linkedin'
              required='required'
              requiredIcon='*'
              placeholder='linkedin.com/in/unicornfront'
              type='text'
              textError='text-error'
              errorMessage='*Por favor introduce tu Linkedin.'            
              handleClick={props.updateLinkedin}
            />
            <Input
              id='github'
              input='Github'
              required='required'
              requiredIcon='*'
              placeholder='@sallyhill'
              type='text'
              textError='text-error'
              errorMessage='*Agradecerán ver tu trabajo.'
              handleClick={props.updateGithub}
            />
          </div>
        </div>
      </div>

    );
}
export default FormFill;