import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import UserCard from "../components/user/UserCard";
import { ProfileMenu } from "../components/user/ProfileMenu";

function Profile() {
    return (
        <div>
            <div style={styles.page}>
                <div className='px-4 py-3' style={{backgroundColor: '#EEEEEE'}}>
                    <UserCard />
                </div>
            </div>
            <Box className="mx-auto" style={styles.listingsContainer}>
                <ProfileMenu />
            </Box>
        </div>
    );
}

export default Profile;
