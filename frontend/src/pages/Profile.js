import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import UserCard from "../components/user/UserCard";
import { ProfileMenu } from "../components/user/ProfileMenu";

function Profile(props) {
    return (
        <div style={styles.page}>
            <UserCard userEmail={props.userEmail} />
            <Box style={styles.listingsContainer}>
                <ProfileMenu />
            </Box>
        </div>
    );
}

export default Profile;
