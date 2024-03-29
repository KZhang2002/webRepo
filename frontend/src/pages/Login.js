import { Box } from "@mui/material";
import { APP_NAME } from "../static/Content";
import styles from "../static/StyleSheet";
import TitleText from "../components/typography/TitleText";
import LoginInput from "../components/login/LoginInput";

function Login(props) {
    return (
        <Box style={styles.loginPage}>
            <Box style={styles.loginBox}>
                <TitleText>{APP_NAME} - Login</TitleText>
                <LoginInput setIsLoggedIn={props.setIsLoggedIn} setUserEmail={props.setUserEmail} />
            </Box>
        </Box>
    )
}

export default Login;