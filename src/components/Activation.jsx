import React, { useState } from 'react';
import { verification } from './methods/BackendConnection/Auth';

const Activation = () => {

    const [ values, setValues ] = useState({
        email: '',
        verificationCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, verificationCode } = values;
        verification(email, verificationCode);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Please activate your account.</h1>

                {/* Email Field */}
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}>
                        </input>
                </div>

                {/* Activation Field */}
                <div>
                    <label htmlFor="password">
                        Activation Code
                    </label>
                    <input 
                        id="verificationCode"
                        type="password" 
                        name="verificationCode" 
                        placeholder="Enter your code"
                        value={values.verificationCode}
                        onChange={handleChange}>
                        </input>
                </div>

                <button
                type="submit">
                    Activate Your Account
                </button>

            </form>
        </div>
    );
};

export default Activation;