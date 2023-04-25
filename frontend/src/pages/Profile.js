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

    let email =  localStorage.getItem("userProfileEmail")

    return (
        <div style={styles.page}>
            <UserCard email={email} />
            <Box style={styles.listingsContainer}>
                <ProfileMenu isOwn={true} />
            </Box>
        </div>
    );
}

export default Profile;
