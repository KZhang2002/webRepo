import styles from "../../static/StyleSheet";
import { Avatar } from "@mui/material";
import { Rating } from "../user/Rating"

export function UserCard({
    name = "Placeholder Name",
    email = "email@email.com",
    imageUrl = "",
    stats = {
        itemsSold: 10,
        reputation: 3.4,
        joinDate: "January 1st, 1970"
    },
}) {
    return (
        <div id="userCard" style={styles.userHeader}>
            <Avatar
                alt={name}
                // src={imageUrl}
                sx={{ width: 100, height: 100 }}
            />
            <section style={styles.userNameSection}>
                <h2 style={styles.userName}>{name}</h2>
                <p style={styles.userEmail}>{email}</p>
            </section>
            <section style={styles.reputationSection}>
                <p style={styles.reputationText}>
                    Reputation: <b>{stats.reputation} / 5</b>
                </p>
                <p style={styles.reputationText}>
                    <b>{stats.itemsSold}</b> item(s) sold
                </p>
                <p style={styles.reputationText}>
                    Joined <b>{stats.joinDate}</b>
                </p>
            </section>
        </div>
    );
}

export default UserCard;
