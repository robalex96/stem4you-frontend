import { types } from "../types/types"
import { getApi, postApi } from "../../helpers/apiHelper";

export const getInfo = info => {
    return {
        type: types.apiGetMethodFinish,
        payload: {
            ...info
        }
    }
}

export const postStart = () => {
    return {
        type: types.apiPostMethodStart
    }
}

export const postFinish = () => {
    return {
        type: types.apiPostMethodFinish
    }
}

export const getStart = (endpoint) => {
    return (async (dispacth) => {
        const user = await getApi(endpoint);
        dispacth(getInfo(user.Item));
    });
}

export const postStartMethod = (endpoint, data) => {
    return(async (dispacth) => {
        dispacth(postStart());
        await postApi(endpoint, data);
        dispacth(postFinish());
    });
}

