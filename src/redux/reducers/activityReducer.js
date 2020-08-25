import { types } from "../types/types";

const initialState = {
    activities: [],
    currentActivity: null
}

export const activityReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.activityLoad:
            return {
                ...state,
                activities: action.payload
            }
        case types.currentActivity:
            return {
                ...state,
                currentActivity: action.payload
            }
        default:
            return state;
    }
}