import styles from "../../static/StyleSheet";
import { Box } from "@mui/material";
import ListingsToolbar from "../browse/ListingsToolbar";
import UserCard from "../user/UserCard";
import { ProfileMenu } from "../user/ProfileMenu";
import { useEffect, useLayoutEffect, useState } from "react";
import { getUser } from "../../api/api";
import { useLocation } from "react-router-dom";

function User(props) {
    const location = useLocation()
    const otherUserEmail = location.pathname.split("/").pop();

    return (
        <div style={styles.page}>
            <UserCard email={otherUserEmail} />
            <Box style={styles.listingsContainer}>
                <ProfileMenu isOwn={false} />
            </Box>
        </div>
    );
}

export default User;
