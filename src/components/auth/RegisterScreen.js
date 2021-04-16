import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const {name, email, password, confirmpassword} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        }
        else if (password !== confirmpassword || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={handleRegister}>

                {
                    msgError && 
                    (<div className="auth__alert-error">
                        {msgError}
                    </div>)
                }

                <input 
                    className="auth__input" 
                    ype="text" 
                    placeholder="Name" 
                    name="name" 
                    autoComplete="off" 
                    value= { name }
                    onChange= { handleInputChange }
                />
                <input 
                    className="auth__input" 
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    autoComplete="off" 
                    value= { email }
                    onChange= { handleInputChange }
                />
                <input 
                    className="auth__input" 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value= { password }
                    onChange= { handleInputChange }
                />
                <input 
                    className="auth__input" 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="confirmpassword" 
                    value= { confirmpassword }
                    onChange= { handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
