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
    console.log(otherUserEmail)

    return (
        <div style={styles.page}>
            <div className='card px-4 pt-3 pb-1 col-5' style={{backgroundColor: '#EEEEEE', minWidth: "20rem"}}>
                <UserCard email={otherUserEmail} />
            </div>
            <Box style={styles.listingsContainer}>
                <ProfileMenu isOwn={false} />
            </Box>
        </div>
    );
}

export default User;
