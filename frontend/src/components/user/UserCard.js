import { Avatar, useScrollTrigger } from "@mui/material";
import { getUser } from "../../api/api";

function UserCard(props) {

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        console.log(props.userEmail)
        getUser(props.userEmail).then((user) => {
            console.log(user)
            setUserInfo({ ...user.data });
        })
    }, [props.userEmail])

    return (
        <div id="userCard" style={styles.userHeader}>
            <Avatar
                alt={name}
                // src={imageUrl}
                sx={{ width: 100, height: 100 }}
            />
            <section style={styles.userNameSection}>
                <h2 style={styles.userName}>{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                <p style={styles.userEmail}>{userInfo.email}</p>
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
