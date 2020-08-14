import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';

export const LoginScreen = () => {
    const handleSubmit = event => {
        event.preventDefault();
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
                        />
                        <input 
                            type="password"
                            placeholder="Contraseña"
                        />
                        <button
                            className="btn btn-primary"
                            type="submit"
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
                        to='/about'    
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
