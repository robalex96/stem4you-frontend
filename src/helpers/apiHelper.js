import { data } from "../aws/data";

const urlbase = data.API.endpoint;

export const getApi = async (endpoint, token) => {
    const url = `${ urlbase }/${ endpoint }`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": token
        },
        mode: 'cors',
        cache: 'default'
    });
    return response.json();
}

export const postApi = async (endpoint, params, token) => {
    const url = `${ urlbase }/${ endpoint}`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
    return response.json();
}