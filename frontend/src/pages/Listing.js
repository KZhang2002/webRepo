import styles from "../static/StyleSheet";
import { Box, useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";
import {useLocation }from "react-router-dom"
import { getListing } from "../api/api";

function Listing (props) {

    const location = useLocation();
    const listingId = location.pathname.split("/").pop()
    const [listing, setListing] = useState({})

    useEffect(() => {
        getListing(listingId).then((data) => {
            setListing(data.data)
        })
    }, [])

    return <Box style={styles.page}>
        Listing {listingId}
        Listing Body: {listing.title}
    </Box>
}

export default Listing;