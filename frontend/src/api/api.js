import { ENDPOINT } from "../static/Config"

const NONRESPONSE = {data: null, error: "Server Error: "}
const SERVER_ERR = {data: null, error: "There was a problem. Please try again later."}

const handleQuery = async (endpoint, method, {body, params}) => {
    
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
            response = await fetch(endpoint+ (params ? '?' + new URLSearchParams(params) : ""));
            data = await response.json();
        } else if (method == 'POST') {
            response = await fetch(endpoint, payload);
            console.log("here")
        }  

    } catch (err) {
        return {data: null, error: `${err}`}
    }

    if (response.status == 200 || response.status == 201) {
        return {data, error: null}
    } else {
        return {data: null, error: SERVER_ERR}
    }
}

export const login = async (email, password) => {
   return await handleQuery(ENDPOINT+'/user/auth', 'GET', {params: {email, password}})
}
 
export const signUp = async (email, password, first_name, last_name) => {
    return await handleQuery(ENDPOINT+'/user', 'POST', {body: {email, password, first_name, last_name}})
}

export const getListings = async (filters) => {
    return await handleQuery(ENDPOINT+'/listings', 'GET', {})
}

export const addListing = async (title, price, seller, desc, img) => {
    return await handleQuery(ENDPOINT+'/listing', 'POST', {body: {title, price, token: seller, desc, img}})
}

export const getUser = async (email) => {
    return await handleQuery(ENDPOINT+`/user/${email}`, 'GET', {})
}

export const getListing = async (id) => {
    return await handleQuery(ENDPOINT+`/listing/${id}`, 'GET', {})
}