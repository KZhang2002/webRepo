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
        props.setIsLoggedIn(true);
        navigate(`../${HOMEPAGE}`)
    }

    const handleLogin = async () => {
            const {_, error} = await submit(user, password, callback)
            setErr(error);
    }

    return (
        <Box style={styles.loginInput}>
            <TextField onChange={(e) => setUser(e.target.value)} style={styles.loginInputItem} name="Username"></TextField>
            <TextField onChange={(e) => setPassword(e.target.value)} style={styles.loginInputItem} name="Password" type="password"></TextField>
            <Button onClick={handleLogin} style={styles.loginInputItem} variant="contained">Login</Button>
            { err ? <ErrorText style={styles.loginInputItem}>{err}</ErrorText> : '' }
        </Box>
    )
}

export default LoginInput;