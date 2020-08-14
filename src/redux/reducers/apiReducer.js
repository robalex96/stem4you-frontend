import { types } from "../types/types";

const initialState = {
    getMethod: false,
    postMethod: false
}

export const apiReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.apiGetMethodStart:
            return {
                ...state,
                getMethod: true
            }
        case types.apiGetMethodFinish:
        return {
            ...state,
            getMethod: false
        }
        case types.apiPostMethodStart:
        return {
            ...state,
            postMethod: true
        }
        case types.apiPostMethodFinish:
        return {
            ...state,
            postMethod: false
        }
        default:
            return state;
    }
}