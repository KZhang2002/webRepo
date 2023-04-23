import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import UserCard from "../components/user/UserCard";
import { ProfileMenu } from "../components/user/ProfileMenu";
import { useEffect, useLayoutEffect, useState } from "react";
import { getUser } from "../api/api";
import { useLocation } from "react-router-dom";

function Profile(props) {
    const location = useLocation()
    const otherUserEmail = location.pathname.split("/").pop();

    return (
        <div style={styles.page}>
            <UserCard userEmail={props.userEmail || otherUserEmail} />
            <Box style={styles.listingsContainer}>
                <ProfileMenu />
            </Box>
        </div>
    );
}

export default Profile;
