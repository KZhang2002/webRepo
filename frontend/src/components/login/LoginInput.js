import { Box, Button, TextField } from "@mui/material";
import { HOMEPAGE } from "../../static/Content";
import styles from "../../static/StyleSheet";
import { submit } from "../../helpers/loginHelper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorText from "../../components/typography/ErrorText";

function LoginInput(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const callback = () => {
        console.log(props)
        props.setIsLoggedIn(true);
        props.setUserEmail(user);
        navigate(`../${HOMEPAGE}`)
    }

    const handleLogin = async () => {
            const data = await submit({user, password, ...props.additionalData}, props.signup, callback)
            console.log(data)
            setErr(data.error);
    }

    const handleRedirect = async () => {
        if (props.signup) {
            navigate(`../login`)
        } else {
            navigate('../signup')
        }
    }

    return (
        <Box style={styles.loginInput}>
            <TextField onChange={(e) => setUser(e.target.value)} style={styles.loginInputItem} placeholder="Email"></TextField>
            <TextField onChange={(e) => setPassword(e.target.value)} style={styles.loginInputItem} placeholder="Password" type="password"></TextField>
            <Button onClick={handleLogin} style={styles.loginInputItem} variant="contained">{props.signup ? "Create Account" : "Login"}</Button>
            <Button onClick={handleRedirect} style={styles.loginInputItem} variant="outlined">{props.signup ? "Login" : "Create Account"}</Button>
            { err ? <ErrorText style={styles.loginInputItem}>{err}</ErrorText> : '' }
        </Box>
    )
}

export default LoginInput;