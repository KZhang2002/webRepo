import { Box } from "@mui/material";
import styles from "../static/StyleSheet";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import { generateListings } from "../helpers/listingsHelper";
import { useEffect, useState } from "react";
import { getListings } from "../api/api";

export function BrowseContent(props) {

    const [renderedListings, setRenderedListings] = useState([])
    const [filters, setFilters] = useState({ query: "", tags: [], minPrice: "", maxPrice: ""});

    useEffect(() => {
        getListings(filters).then((listings) => {
            setRenderedListings(listings.data || []);
            console.log(listings.data)
        })
        props.setLoad(false)
    }, [filters, props.load])

    return (
        <Box id="listings" style={{ ...styles.listingsContainer }}>
            <ListingsToolbar setQuery={setFilters} query={filters} {...props}/>
            {generateListings(renderedListings, props.isOwn, {email: props.email || ""})}
        </Box>
    )
}

function Browse(props) {

    return <div id="background" style={{ ...styles.page }}>
        <BrowseContent email={props.email || ""} load={false} setLoad={() => {}} isOwn={false} handleAddListing={()=>{}}/>
    </div>
}

export default Browse;