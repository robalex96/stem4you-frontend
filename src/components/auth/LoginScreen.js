import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Footer } from '../footer/Footer';
import { useForm } from '../../hooks/useForm';
import { startAWSLogin } from '../../redux/actions/auth';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(startAWSLogin(email, password));
    }

    return (
        <div className="auth__main">
            <div className="auth__backgroud"></div>
            <div className="auth__tape"></div>
            <div className="auth__wellcome"></div>
            <div className="auth__card-login">
                <div className="auth__head"></div>
                <div className="auth__card-title-login">
                    <h1 className="auth__title">Iniciar Sesión</h1>
                </div>
                <div className="auth__card-form-login">
                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Usuario"
                            name="email"
                            value={ email }
                            onChange={ handleInputChange }
                        />
                        <input 
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={ password }
                            onChange={ handleInputChange }
                        />
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={ loading }
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
                <div className="auth__card-link">
                    <Link
                        className="auth__link-item auth__link-primary"
                        to='/auth/register'
                    >
                        Crear cuenta
                    </Link>
                    <Link
                        className="auth__link-item auth__link-secondary"
                        to='/auth/about'    
                    >
                        Acerca del proyecto
                    </Link>
                </div>
                <Footer />
            </div>
            <div className="auth__circuit"></div>
        </div>
    )
}
