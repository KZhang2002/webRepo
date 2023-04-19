import { login, signUp as createAccount } from "../api/api"

export const submit = async (user, password, signUp, callback) => {
    if (user && password) {
        if (!user.includes('@') || !user.includes('.')) {
            return { error: 'Please enter a valid email.' }
        }
        else {
            let resp = {}
            if (!signUp) {
                resp = await login(user, password)
            } else {
                resp = await createAccount(user, password)
                submit(user, password, false, callback)
            }
            if (!resp.error) {
                callback()
                if (!signUp) localStorage.setItem("userProfile", resp.data)
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