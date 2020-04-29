import React from 'react';
import Input from './Input';
import GetAvatar from '../GetAvatar';

const FormFill = (props) => {
  const {name, job, email, phone, linkedin, github} = props.userInfo;
  const {updateUserInfo, validateForm, avatar, isAvatarDefault, updateAvatar, inputThumbnail, updateUserInfoIcon, inputEmail, inputErrorEmail, inputRef} = props;

  return (
    <div className="form__fill">
      <div className="fill--bottom fill--bottom--visible">
        <div className="fillform bottom-1">
          <Input
            id='name'
            input='Nombre completo'
            required='required'
            requiredIcon='*'
            placeholder='Sally Jill'
            value={name}
            type='text'
            textError='text-error'
            errorMessage='*Dinos tu nombre por favor.'
            handleClick={updateUserInfo}
            validateForm={validateForm}
          />
          <Input
            id='job'
            input='Puesto'
            required='required'
            requiredIcon='*'
            placeholder='Front-end unicorn'
            value={job}
            type='text'
            textError='text-error'
            errorMessage='*Tu trabajo también, gracias.'
            handleClick={updateUserInfo}
            validateForm={validateForm}
          />
        </div>
        <div className="fillform bottom-2">
          <label className="label-fill" htmlFor="addimage">Imagen de perfil<span className="required">*</span></label>
          <div className="bottom-2-box">
            <GetAvatar
              avatar={avatar}
              isAvatarDefault={isAvatarDefault}
              updateAvatar={updateAvatar}
              validateForm={validateForm}
              inputRef={inputThumbnail}
            />
          </div>
          <Input
            id='email'
            input='Email'
            required='required'
            requiredIcon='*'
            placeholder='sally-hill@gmail.com'
            value={email}
            type='email'
            textError='text-error'
            errorMessage='*Deja un email correcto para que puedan contactarte.'
            handleClick={updateUserInfoIcon}
            validateForm={validateForm}
            inputRef={inputEmail}
            inputErrorMsg={inputErrorEmail}
          />
          <Input
            id='phone'
            input='Teléfono'
            required=''
            placeholder='660632407'
            value={phone}
            type='tel'
            handleClick={updateUserInfoIcon}
            validateForm={validateForm}
          />
          <Input
            id='linkedin'
            input='Linkedin'
            required='required'
            requiredIcon='*'
            placeholder='unicornfront'
            value={linkedin}
            type='text'
            textError='text-error'
            errorMessage='*Por favor introduce tu Linkedin.'
            handleClick={updateUserInfoIcon}
            validateForm={validateForm}
            inputRef={inputRef}
          />
          <Input
            id='github'
            input='Github'
            required='required'
            requiredIcon='*'
            placeholder='sallyhill'
            value={github}
            type='text'
            textError='text-error'
            errorMessage='*Agradecerán ver tu trabajo.'
            handleClick={updateUserInfoIcon}
            validateForm={validateForm}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  );
}

export default FormFill;