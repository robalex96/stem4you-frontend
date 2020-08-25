import Swal from 'sweetalert2';
import { Auth } from "aws-amplify";

import { types } from "../types/types";
import { starLoading, finishLoading, startCreateUserUI, endUI } from "./ui";

export const login = (id, token) => {
    return {
        type: types.login,
        payload: {
            id,
            token: token.idToken.jwtToken
        }
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}

export const userInfo = () => {
    return {
        type: types.userInfo
    }
}

export const startAWSLogin = (user, password) => {
    return (async (dispacth) => {
        dispacth(starLoading());
        try{
            await Auth.signIn(user, password);
            const { attributes, signInUserSession } = await Auth.currentAuthenticatedUser();
            dispacth(login(attributes.sub, signInUserSession));
            dispacth(finishLoading());
        }
        catch (error){
            Swal.fire('Error', error.message, 'error');
            dispacth(finishLoading());
        }
    });
}

export const endAWSLogin = () => {
    return(async (dispacth) => {
        try {
            await Auth.signOut();
            dispacth(logout());
        }
        catch (error){
            Swal.fire('Error', error.message, 'error');
        }
    });
}

export const startCreateUser = (email, password, name, institute, course, age, gender) => {
    return (async (dispacth) => {
        dispacth(starLoading());
        dispacth(startCreateUserUI());
        try{
            await Auth.signUp({ username:email, password });
            const { value: code } = await Swal.fire({
                title: 'Por favor, revice su correo e ingrese el código de verificación',
                input: 'text',
                inputPlaceholder: 'Código de verificación'
            });
            const response = await Auth.confirmSignUp(email, code);
            if(response === 'SUCCESS'){
                dispacth(startAWSLogin(email, password));
                dispacth(createdUser(name, email, institute, course, age, gender));
            }
            dispacth(finishLoading());
        }
        catch (error){
            Swal.fire('Error', error.message, 'error');
            dispacth(endUI());
            dispacth(finishLoading());
        }

    });
}

export const createdUser = (name, email, institute, course, age, gender) => {
    return {
        type: types.creatingUser,
        payload: {
            name,
            email,
            institute,
            course,
            age,
            gender
        }
    }
}