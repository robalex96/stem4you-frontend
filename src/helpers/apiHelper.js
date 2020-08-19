import { data } from "../aws/data";

const urlbase = data.API.endpoint;

export const getApi = async endpoint => {
    const url = `${ urlbase }/${ endpoint }`;
    const headers = new Headers();
    const response = await fetch(url, {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    });
    return response.json();
}

export const postApi = async (endpoint, params) => {
    const url = `${ urlbase }/${ endpoint}`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
}