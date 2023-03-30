import { Avatar } from "@mui/material";
import { Fragment } from "react";
//import { Paper } from "@mui/material";
import styles from "../static/StyleSheet";
//import PageTitleText from '../components/typography/PageTitleText'

function Profile (props) {
    return (
        <Fragment>
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
            </div>

            <div style={styles.listingsList}>

            </div>
        </Fragment>
    )
}

export default Profile;