import { Box } from "@mui/material";
import styles from "../static/StyleSheet";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import { generateListings } from "../helpers/listingsHelper";
import { useEffect, useState } from "react";
import { getListings } from "../api/api";

export function BrowseContent(props) {

    const [renderedListings, setRenderedListings] = useState([])
    const [query, setQuery] = useState("");

    useEffect(() => {
        getListings({query}).then((listings) => {
            setRenderedListings(listings.data || []);
            console.log(listings.data)
        })
    }, [query])

    return (
        <Box id="listings" style={{ ...styles.listingsContainer }}>
            <ListingsToolbar setQuery={setQuery} {...props}/>
            {generateListings(renderedListings)}
        </Box>
    )
}

function Browse(props) {

    return <div id="background" style={{ ...styles.page }}>
        <BrowseContent isOwn={false} handleAddListing={()=>{}}/>
    </div>
}

export default Browse;