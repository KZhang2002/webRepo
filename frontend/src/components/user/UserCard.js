import { Avatar, useScrollTrigger, IconButton } from "@mui/material";
import { ModeComment } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../api/api";
import { useState, useEffect } from "react";
import styles from "../../static/StyleSheet";
function UserCard(props) {

    let phone = "999-999-9999"

    let stats = {
        reputation: "5",
        itemsSold: "10",
    }

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        console.log(props.email)
        getUser(props.email).then((user) => {
            console.log(user)
            setUserInfo({ ...user.data });
            console.log(user)
        })
    }, [props.email])

    return (
        <div id="userCard" style={styles.userHeader}>
            <Avatar
                alt={userInfo.name}
                // src={imageUrl}
                sx={{ width: 100, height: 100 }}
            />
            <section style={styles.userNameSection}>
                <h2 style={styles.userName}>{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                <p style={styles.userEmail}>{props.email}</p>
                <p style={styles.userEmail}>{phone}</p>
                <div style={styles.listingReview} id="reviewButton">
                    <IconButton onClick={() => navigate(`/user/${userInfo.id}`)} sx={{ color: '#3c3c3c' }}><ModeComment /></IconButton>
                    <Link to={`/user/${props.email}`} style={styles.reviewText}>5 Seller Reviews</Link>
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
