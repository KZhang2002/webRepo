import { Avatar } from "@mui/material";
//import { Paper } from "@mui/material";
import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import { generateListings } from "../helpers/listingsHelper";

function Profile(props) {
    return (
        <div style={styles.page} >
            <div style={styles.profileHeader}>
                <Avatar
                    alt="placeholder"
                    src="https://placehold.jp/150x150.png"
                    sx={{ width: 100, height: 100 }}
                />
                <section style={styles.profileNameSection}>
                    <h2 style={styles.profileName}>Placeholder Name</h2>
                    <p style={styles.profileEmail}>email@email.com</p>
                </section>
                <section style={styles.reputationSection}>
                    <p style={styles.reputationText}><b>10</b> item(s) sold</p>
                    <p style={styles.reputationText}><b>0</b> strike(s) on record</p>
                    <p style={styles.reputationText}>Joined <b>January 1st, 1970</b></p>
                </section>
            </div>
            <Box style={styles.listingsContainer}>
                <ListingsToolbar />
                {generateListings()}
            </Box>
        </div>
    )
}

export default Profile;