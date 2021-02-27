import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../components/methods/BackendConnection';

const FormLogin = () => {

    const [ values, setValues ] = useState({
        email: '',
        password: '',
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
        const { email, password } = values;
        login(email, password);
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
                        id="password"
                        type="password" 
                        name="password" 
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}>
                        </input>
                </div>

                <button
                type="submit">
                    Log In
                </button>

                <span>
                    Don't have an account? <Link to="/signup">Signup here</Link>
                </span>
            </form>
        </div>
    );
};

export default FormLogin;