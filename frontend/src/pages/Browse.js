import { Box } from "@mui/material";
import styles from "../static/StyleSheet";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import { LISTING } from "../static/Content";
import ListingCard from "../components/browse/ListingCard";

function Browse(props) {

    const listings = Array(10).fill(LISTING)

    function generateListings() {
        return listings.map((value, index) => {
            return <ListingCard />
        })
    }

    return <Box style={styles.page}>
        <Box style={styles.listingsContainer}>
        <ListingsToolbar />
            {generateListings()}
        </Box>
    </Box>
}

export default Browse;