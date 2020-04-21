import React from 'react';

const Input = (props) => {
    
    function getData(evt) {
        const id = evt.currentTarget.id;
        const value = evt.currentTarget.value;
        const input = evt.currentTarget;
        props.handleClick(id, value);
        props.validateForm(input);
    }

    return (
        <div>
            <label className="label-fill" htmlFor={props.id}>{props.input}
                <span className={props.required}>{props.requiredIcon}</span>
            </label>
            <input placeholder={props.placeholder} id={props.id} type={props.type} name={props.id} className="input-fill input-validation" required={props.required} onChange={getData}
             value={props.value} ref={props.inputRef}
            />
            <p className={`hidden ${props.textError}`} id={`text-error_${props.id}`}>{props.errorMessage}</p>
        </div>
    )
}

export default Input;






// validateForm(input, message) {
//     if (input.name === "email") {
//       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
//         input.classList.remove("input-error");
//         input.classList.add("input-correct");
//         message.classList.add("hidden")
//         this.setState((prevState => {
//           return {
//             formValidation: {
//               ...prevState.formValidation,
//               email: 'true'
//             }
//           }
//         }))
//       } else {
//         input.classList.remove("input-correct");
//         message.classList.remove("hidden")
//         input.classList.add("input-error");
//         this.setState((prevState => {
//           return {
//             formValidation: {
//               ...prevState.formValidation,
//               email: 'false'
//             }
//           }
//         }))
//       }
//     } else if (input.name === "image") {
//       const thumbnail = message.nextSibling.nextSibling
//       if (/\.(gif|jpeg|jpg|png)$/i.test(input.value) === false) {
//         thumbnail.classList.remove("input-correct")
//         message.classList.remove('hidden');
//         thumbnail.classList.add("input-error")
//         this.setState((prevState => {
//           return {
//             formValidation: {
//               ...prevState.formValidation,
//               image: 'false'
//             }
//           }
//         }))
//       } else {
//         thumbnail.classList.remove("input-error")
//         thumbnail.classList.add("input-correct")
//         message.classList.add('hidden');
//         this.setState((prevState => {
//           return {
//             formValidation: {
//               ...prevState.formValidation,
//               image: 'true'
//             }
//           }
//         }))
//       }
//     } else if (input.value !== "") {
//       input.classList.remove("input-error");
//       input.classList.add("input-correct");
//       message.classList.add("hidden")
//       this.setState((prevState => {
//         return {
//           formValidation: {
//             ...prevState.formValidation,
//             [input.name]: 'true'
//           }
//         }
//       }))
//     } else {
//       input.classList.remove("input-correct");
//       message.classList.remove("hidden")
//       input.classList.add("input-error");
//       this.setState((prevState => {
//         return {
//           formValidation: {
//             ...prevState.formValidation,
//             [input.name]: 'false'
//           }
//         }
//       }))
//     };

//     // this.validateAll(input)
//   }




// validateAll(evt) {
//     const { name, job, image, email, linkedin, github } = this.state.formValidation;
//     const errorMessage = this.errorMessage.current;
//     const createButton = errorMessage.nextSibling;
//     if (name === 'true' && job === 'true' && image === 'true' && email === 'true' && linkedin === 'true' && github === 'true') {
//       errorMessage.classList.add('hidden')
//       createButton.classList.remove('create-card--button--active')
//       createButton.disabled = false
//     } else {
//       errorMessage.classList.remove('hidden')
//       createButton.classList.add('create-card--button--active')
//       createButton.disabled = true
//     }
//   }