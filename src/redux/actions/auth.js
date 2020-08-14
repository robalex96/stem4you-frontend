import Swal from 'sweetalert2';
import { Auth } from "aws-amplify";

import { types } from "../types/types";
import { starLoading, finishLoading } from "./ui";

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

export const startCreateUser = (username, password, id, token) => {
    return (async (dispacth) => {
        dispacth(starLoading());
        try{
            await Auth.signUp({ username, password });
            dispacth(startAWSLogin(username, password));
        }
        catch (error){
            Swal.fire('Error', error.message, 'error');
            dispacth(finishLoading());
        }

    });
}