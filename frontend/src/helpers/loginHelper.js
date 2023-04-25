import { login, signUp as createAccount } from "../api/api"

export const submit = async (body, signUp, callback) => {
    if (body.user && body.password) {
        if (!body.user.includes('@') || !body.user.includes('.')) {
            return { error: 'Please enter a valid email.' }
        }
        else {
            let resp = {}
            if (!signUp) {
                resp = await login(body.user, body.password)
                console.log(resp)
            } else {
                resp = await createAccount(body.user, body.password, body.firstName, body.lastName)
                submit(body, false, callback)
            }
            if (!resp.error) {
                callback()
                console.log(resp)
                if (!signUp) {
                    localStorage.setItem("userProfile", resp.data.auth)
                    localStorage.setItem("userProfileEmail", body.user)
                }
                return { error: null }
            } else {
                console.log(resp.error)
                return { error: resp.error }
            }
        }
    } else {
        return { error: 'Please enter a valid email and password.' }
    }
}