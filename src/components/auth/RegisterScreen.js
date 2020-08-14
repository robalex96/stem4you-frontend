import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="auth__main">
            <div className="auth__backgroud"></div>
            <div className="auth__card-register">
                <div className="auth__head"></div>
                <div className="auth__card-title-register">
                    <h1 className="auth__title">Registrarse</h1>
                </div>
                <div className="auth__card-form-register">
                    <form onSubmit={ handleSubmit }>
                        <div className="row">
                            <div className="col-md-12">
                                <input 
                                    type='text'
                                    placeholder='Nombre'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <input 
                                    type='text'
                                    placeholder='Correo'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input 
                                    type='text'
                                    placeholder='Contraseña'
                                />
                            </div>
                            <div className="col-md-6">
                                <input 
                                    type='text'
                                    placeholder='Contraseña'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <input 
                                    type='text'
                                    placeholder='Institución'
                                />
                            </div>
                            <div className="col-md-4">
                                <input 
                                    type='text'
                                    placeholder='Curso'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input 
                                    type='text'
                                    placeholder='Edad'
                                />
                            </div>
                            <div className="col-md-6">
                                <input 
                                    type='text'
                                    placeholder='Genero'
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
                <div className="auth__card-link-login">
                    <Link 
                        className="auth__link-item auth__link-primary"
                        to='/auth/login'
                    >
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
            <div className="auth__message">
                <p className="auth__message-title">
                    ¿Aún no haces parte?
                </p>
                <p className="auth__message-body">
                    Crea tu cuenta de forma <b>sencilla</b> y despierta <b>tu curiosidad</b> con todas <i>nuestras aventuras</i>.
                </p>
            </div>
        </div>
    )
}
