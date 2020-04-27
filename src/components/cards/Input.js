import React from 'react';

const Input = (props) => {
    const {id, input, required, requiredIcon, placeholder, type, value, inputRef, textError, errorMessage} = props;

    function getData(evt) {
        const id = evt.currentTarget.id;
        const value = evt.currentTarget.value;
        const input = evt.currentTarget;
        const message = evt.currentTarget.nextSibling;
        props.handleClick(id, value);
        props.validateForm(input, message);
    }

    return (
        <div>
            <label className="label-fill" htmlFor={id}>{input}
                <span className={required}>{requiredIcon}</span>
            </label>
            <input placeholder={placeholder} id={id} type={type} name={id} className="input-fill input-validation" required={required} onChange={getData} value={value} ref={inputRef} />
            <p className={`hidden ${textError}`} id={`text-error_${id}`}>{errorMessage}</p>
        </div>
    )
}

export default Input;
