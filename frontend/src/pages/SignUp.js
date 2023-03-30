import { Box } from "@mui/material";
import { APP_NAME } from "../static/Content";
import styles from "../static/StyleSheet";
import TitleText from "../components/typography/TitleText";
import LoginInput from "../components/login/LoginInput";

function SignUp(props) {
    return (
        <Box style={styles.loginPage}>
            <Box style={styles.loginBox}>
                <TitleText>{APP_NAME}</TitleText>
                <LoginInput setIsLoggedIn={props.setIsLoggedIn} signup={true} />
            </Box>
        </Box>
    )
}

export default SignUp;