import React, {useState} from 'react';

function Form() {
    const [formVisible, setFormVisibility] = React.useState(true);
    const emailField = React.createRef();

    function hideForm() {
        setFormVisibility(false)
    }

    function validateEmail(e) {
        const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regExp.test(String(e.target.value.toLowerCase()))) {
            console.log('Form submitted');
            emailField.current.classList.remove('error');
        } else {
            emailField.current.classList.add('error');
        }
    }

    return(
            <div className="form-wrapper">
                {formVisible ? (
                        <form className="resend-form">
                            <h4>
                                Enter email if you wish to resend the meal plan link
                            </h4>
                            <input type="email" placeholder="E-mail" className="resend-form__email" onBlur={validateEmail} ref={emailField}/>
                            <input type="submit" value="Resend" className="resend-form__submit"/>
                            <input type="button" value="&times;" className="resend-form__close" title="Close" onClick={hideForm}/>
                        </form>
                ) : ''}
            </div>

    )
}

export default Form;
