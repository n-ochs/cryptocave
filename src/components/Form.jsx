import React, { useState } from 'react';
import FormSignup from '../pages/FormSignup';
import FormSuccess from '../pages/FormSuccess';

function Form() {
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    };

    return (
        <div>
            {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </div>
    );
};

export default Form;