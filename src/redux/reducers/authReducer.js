import { types } from '../types/types';

const initialState = {
    id: '',
    token: ''
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                id: action.payload.id,
                token: action.payload.token
            }
        case types.logout:
            return { }
        case types.creatingUser:
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        default:
            return state;
    }
}