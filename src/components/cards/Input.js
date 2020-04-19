import React from 'react';

const Input = (props) => {
    
    function getData(evt) {
        const id = evt.currentTarget.id;
        const value = evt.currentTarget.value;
        props.handleClick(id, value);
    }

    return (
        <div>
            <label className="label-fill" htmlFor={props.id}>{props.input}
                <span className={props.required}>{props.requiredIcon}</span>
            </label>
            <input placeholder={props.placeholder} id={props.id} type={props.type} name={props.id} className="input-fill input-validation" required={props.required} onChange={getData}
             value={props.value}
            />
            <p className={`hidden ${props.textError}`} id={`text-error_${props.id}`}>{props.errorMessage}</p>
        </div>
    )
}

export default Input;