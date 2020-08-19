import { types } from "../types/types"

export const setError = error => {
    return {
        type: types.uiSetError,
        payload: error
    }
}

export const removeError = () => {
    return {
        type: types.uiRemoveError
    }
}

export const starLoading = () => {
    return {
        type: types.uiStartLoading
    }
}

export const finishLoading = () => {
    return {
        type: types.uiFinishLoading
    }
}

export const startCreateUserUI = () => {
    return {
        type: types.uiStartCreateUser
    }
}

export const finishCreateUserUI = () => {
    return {
        type: types.uiFinishCreateUser
    }
}

export const endUI = () => {
    return {
        type: types.uiFinishSession
    }
}