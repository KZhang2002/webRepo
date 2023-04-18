import styles from "../../static/StyleSheet";
import { Avatar } from "@mui/material";

function UserCard({
    name = "Placeholder Name",
    email = "email@email.com",
    imageUrl = "https://placehold.jp/150x150.png",
    stats = {
        itemsSold: 10,
        strikes: 0,
        joinDate: "January 1st, 1970"
    },
}) {
    return (
        <div style={styles.userHeader}>
            <Avatar
                alt="placeholder"
                src={imageUrl}
                sx={{ width: 100, height: 100 }}
            />
            <section style={styles.userNameSection}>
                <h2 style={styles.userName}>{name}</h2>
                <p style={styles.userEmail}>{email}</p>
            </section>
            <section style={styles.reputationSection}>
                <p style={styles.reputationText}>
                    <b>{stats.itemsSold}</b> item(s) sold
                </p>
                <p style={styles.reputationText}>
                    <b>{stats.strikes}</b> strike(s) on record
                </p>
                <p style={styles.reputationText}>
                    Joined <b>{stats.joinDate}</b>
                </p>
            </section>
        </div>
    );
}

export default UserCard;
