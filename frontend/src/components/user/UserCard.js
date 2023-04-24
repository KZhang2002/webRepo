import { Avatar, useScrollTrigger, Icon } from "@mui/material";
import { ModeComment } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { getUser } from "../../api/api";
import { useState, useEffect } from "react";
import styles from "../../static/StyleSheet";
function UserCard({
    email = "esdeeplearning@.",
}) {

    let phone = "999-999-9999"

    let stats = {
        reputation: "5",
        itemsSold: "10",
    }

    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        console.log(email)
        getUser(email).then((user) => {
            console.log(user)
            setUserInfo({ ...user.data });
            console.log(user)
        })
    }, [email])

    return (
        <div id="userCard" style={styles.userHeader}>
            <Avatar
                alt={userInfo.name}
                // src={imageUrl}
                sx={{ width: 100, height: 100 }}
            />
            <section style={styles.userNameSection}>
                <h2 style={styles.userName}>{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                <p style={styles.userEmail}>{email}</p>
                <p style={styles.userEmail}>{phone}</p>
                <div style={styles.listingReview} id="reviewButton">
                    <Icon sx={{ color: '#3c3c3c' }}><ModeComment /></Icon>
                    <Link to={`/user/${email}`} style={styles.reviewText}>5 Seller Reviews</Link>
                </div>
            </section>
            <section style={styles.reputationSection}>
                <p style={styles.reputationText}>
                    Reputation: <b>{stats.reputation} / 5</b>
                </p>
                <p style={styles.reputationText}>
                    <b>{stats.itemsSold}</b> item(s) sold
                </p>
                <p style={styles.reputationText}>
                    Joined <b>12 months ago</b>
                </p>
            </section>
        </div>
    );
}

export default UserCard;
