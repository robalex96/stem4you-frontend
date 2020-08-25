import { types } from "../types/types"

export const userData = (info) => {
    return {
        type: types.userInfo,
        payload: { ...info }
    }
}