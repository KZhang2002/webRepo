import { Avatar, useScrollTrigger, IconButton } from "@mui/material";
import { ModeComment } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../api/api";
import { useState, useEffect } from "react";
import styles from "../../static/StyleSheet";
function UserCard(props) {

    let phone = "318-485-2384"

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
            <section className="col-6" style={styles.userNameSection}>
                <h2 style={styles.userName}>{`Peter Wilkinson`}</h2>
                <p style={styles.userEmail}>{"peter_wilk02@gmail.com"}</p>
                {/* <div style={styles.listingProfileReview} className="mt-1" id="reviewButton">
                    <IconButton onClick={() => navigate(`/user/${props.email}/reviews`)} sx={{ color: '#3c3c3c' }}><ModeComment /></IconButton>
                    <Link to={`/user/${props.email}/reviews`} style={styles.reviewText}>View Seller Reviews</Link>
                </div> */}
            </section>
        </div>
    );
}

export default UserCard;
