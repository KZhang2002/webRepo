import { ENDPOINT } from "../static/Config"

const NONRESPONSE = {data: null, error: "No data received from server."}
const SERVER_ERR = {data: null, error: "There was a problem. Please try again later."}

const handleQuery = async (endpoint, method, body = {}) => {
    
    const payload = {
        method,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    let data = null
    let response = null;

    try {
        if (method == 'GET') {
            response = await fetch(endpoint+ (body ? '?' + new URLSearchParams(body) : ""));
            data = await response.json();
        } else if (method == 'POST') {
            response = await fetch(endpoint, payload);
        }  

    } catch {
        return NONRESPONSE
    }

    if (response.status == 200 || response.status == 201) {
        return {data, error: null}
    } else {
        return SERVER_ERR
    }
}

export const login = async (email, password) => {
   return await handleQuery(ENDPOINT+'/user/auth', 'GET', {email, password})
}
 
export const signUp = async (email, password) => {
    return await handleQuery(ENDPOINT+'/user', 'POST', {email, password, first_name: "preston", last_name: "willis"})
}

export const getListings = async () => {
    return await handleQuery(ENDPOINT+'/listings', 'GET')
}

export const addListing = async (email, password) => {
    return await handleQuery(ENDPOINT+'/listing', 'PUT', {email, password, first_name: "preston", last_name: "willis"})
}