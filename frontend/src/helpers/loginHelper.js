import { login } from "../api/api"

export const submit = async (user, password, callback) => {
    if (user && password) {
        if (!user.includes('@') || !user.includes('.')) {
            return {error: 'Please enter a valid email.'}
        }
        else {
            const {data, error} = await login(user, password)
            if (!error) {
                callback()
                return {error: null}
            } else {
                console.log(error)
                return {error}
            }
        }
    } else {
        return {error: 'Please enter a valid email and password.'}
    }
}