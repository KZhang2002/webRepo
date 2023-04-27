import { ReviewList } from "../components/user/ReviewList";
import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import UserCardReviews from "../components/user/UserCardReviews";
import { ProfileMenu } from "../components/user/ProfileMenu";
import { useEffect, useLayoutEffect, useState } from "react";
import { getUser } from "../api/api";
import { useLocation } from "react-router-dom";
import { ReviewForm } from "../components/user/ReviewForm";

function UserReviews(props) {
    const location = useLocation()
    const otherUserEmail = location.pathname.split("/").at(-2);
    console.log(otherUserEmail)

    const reviews = [
        {id: 3, user: 11, review: "This guy sucks. He took my wife and kids.", seller: 12, rating: 1, snowflake: "2023-04-24 15:41:37"},
        {id: 2, user: 9, review: "Blegh!", seller: 12, rating: 3, snowflake: "2023-04-24 15:41:37"},
        {id: 1, user: 12, review: "This guy is great. He gave me my wife and kids.", seller: 12, rating: 5, snowflake: "2023-04-24 15:41:37"}
    ]

    return (
        <div style={styles.page}>
            <div className='card px-4 pt-3 pb-1 col-5' style={{backgroundColor: '#EEEEEE', minWidth: "20rem"}}>
                <UserCardReviews email={otherUserEmail} />
            </div>
            <div id="background" style={{ height: "100vw", width: "100%"}}>
                <ReviewList email={otherUserEmail} reviews={reviews}/>
            </div>
        </div>
    )
}

export default UserReviews;