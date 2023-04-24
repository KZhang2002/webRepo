import { Box } from "@mui/material";
import { APP_NAME } from "../static/Content";
import styles from "../static/StyleSheet";
import TitleText from "../components/typography/TitleText";
import { TextField } from "@mui/material"
import LoginInput from "../components/login/LoginInput";
import { useState } from "react";

function SignUp(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    return (
        <Box style={styles.loginPage}>
            <Box style={styles.loginBox}>
                <TitleText>{APP_NAME} - Sign Up</TitleText>
                <TextField onChange={(e) => setFirstName(e.target.value)} style={styles.loginInputItem} placeholder="First Name"></TextField>
                <TextField onChange={(e) => setLastName(e.target.value)} style={styles.loginInputItem} placeholder="Last Name"></TextField>
                <LoginInput setUserEmail={props.setUserEmail} setIsLoggedIn={props.setIsLoggedIn} signup={true} additionalData={{firstName, lastName}} />
            </Box>
        </Box>
    )
}

export default SignUp;