import { ENDPOINT } from "../static/Config"

const NONRESPONSE = {data: null, error: "No data received from server."}
const SERVER_ERR = {data: null, error: "There was a problem. Please try again later."}

export const login = async (user, password) => {
    const payload = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({user, password})
    }

    const data = null

    try {
        const resp = await fetch(ENDPOINT, payload)
        data = resp.json()
    } catch {
       // return SERVER_ERR
       return {data: '', error: null}
    }

    if (data) {
        return {data, error: null}
    } else {
        return NONRESPONSE
    }
}
