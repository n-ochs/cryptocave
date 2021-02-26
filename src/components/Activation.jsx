import React, { useState } from 'react';
import { verification } from './methods/BackendConnection';

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
                <h1>Please log in to your account.</h1>

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

                {/* Password Field */}
                <div>
                    <label htmlFor="password">
                        Password
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