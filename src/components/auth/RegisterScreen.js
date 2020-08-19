import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startCreateUser } from '../../redux/actions/auth';

export const RegisterScreen = () => {
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        institute: '',
        course: '',
        age: '',
        gender: ''
    });

    const {
        name,
        email,
        password,
        confirmPassword,
        institute,
        course,
        age,
        gender
    } = formValues;

    const dispacth = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispacth(startCreateUser(email, password, name, institute, course, age, gender));
    }

    return (
        <div className="auth__main">
            <div className="auth__backgroud"></div>
            <div className="auth__card-register">
                <div className="auth__head"></div>
                <div className="auth__card-title-register">
                    <h1 className="auth__title">Registro</h1>
                </div>
                <div className="auth__card-form-register">
                    <form onSubmit={ handleSubmit }>
                        <div className="row">
                            <div className="col-md-12">
                                <input 
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    value={ name }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <input 
                                    type="text"
                                    placeholder="Correo"
                                    name="email"
                                    value={ email }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input 
                                    type="password"
                                    placeholder="CONTRASEÑA"
                                    name="password"
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-6">
                                <input 
                                    type="password"
                                    placeholder="CONFIRMAR CONTRASEÑA"
                                    name="confirmPassword"
                                    value={ confirmPassword }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <input 
                                    type="text"
                                    placeholder="Institución"
                                    name="institute"
                                    value={ institute }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-4">
                                <input 
                                    type="text"
                                    placeholder="Curso"
                                    name="course"
                                    value={ course }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input 
                                    type="text"
                                    placeholder="Edad"
                                    name="age"
                                    value={ age }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-6">
                                <input 
                                    type="text"
                                    placeholder="Genero"
                                    name="gender"
                                    value={ gender }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={ loading }
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
                <div className="auth__card-link-login">
                    <Link 
                        className="auth__link-item auth__link-primary"
                        to="/auth/login"
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
