import { Avatar, useScrollTrigger, IconButton } from "@mui/material";
import { List, ModeComment } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../api/api";
import { useState, useEffect } from "react";
import styles from "../../static/StyleSheet";
function UserCard(props) {
    const navigate = useNavigate()
    console.log(props.email)
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        console.log(props.email)
        getUser(props.email).then((user) => {
            console.log(user)
            setUserInfo({ ...user.data });
            console.log(user)
        })
    }, [props.email])

    const formatName = (name) => {
        return name ? `${name.charAt(0).toUpperCase()}${name.substring(1)}` : ""
    }

    return (
        <div id="userCard" style={styles.userHeader}>
            <Avatar
                alt={userInfo.name}
                // src={imageUrl}
                sx={{ width: 100, height: 100 }}
            />
            <section className="col-6" style={styles.userNameSection}>
                <h2 style={styles.userName}>{`${formatName(userInfo.first_name)} ${formatName(userInfo.last_name)}`}</h2>
                <p style={styles.userEmail}>{props.email}</p>
                <div style={styles.listingProfileReview} className="mt-1" id="reviewButton">
                    <IconButton onClick={() => navigate(`/user/${props.email}/reviews`)} sx={{ color: '#3c3c3c', marginTop: "0.1rem" }}><List/></IconButton>
                    <Link to={`/user/${props.email}`} style={styles.reviewText}>View Seller Listings</Link>
                </div>
            </section>
        </div>
    );
}

export default UserCard;
