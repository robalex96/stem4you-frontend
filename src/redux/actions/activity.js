import { types } from "../types/types"

export const loadActivities = activities => {
    return {
        type: types.activityLoad,
        payload: activities
    }
}

export const currentActivity = activity => {
    return {
        type: types.currentActivity,
        payload: activity
    }
}