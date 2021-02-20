import React from 'react';
import useForm from '../components/useForm';
import validate from '../components/methods/ValidateInfo';

const FormSignUp = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>

                {/* Username Field */}
                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}>
                        </input>
                        {errors.username && <p>{errors.username}</p>}
                </div>

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
                        {errors.email && <p>{errors.email}</p>}
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
                        {errors.password && <p>{errors.password}</p>}
                </div>

                {/* Password Confirmation Field */}
                <div>
                    <label htmlFor="password2">
                        Confirm Your Password
                    </label>
                    <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        placeholder="Enter your password"
                        value={values.password2}
                        onChange={handleChange}>
                        </input>
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>

                <button
                type="submit">
                    Sign Up
                </button>

                <span>
                    Already have an account? <a href="#">Login here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignUp;