import { types } from '../types/types';

export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                token: action.payload.token
            }
            case types.logout:
                return { }
        default:
            return state;
    }
}