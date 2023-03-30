import { Box } from "@mui/material";
import styles from "../static/StyleSheet";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import { generateListings } from "../helpers/listingsHelper";

function Browse(props) {

    return <Box style={styles.page}>
        <Box style={styles.listingsContainer}>
        <ListingsToolbar />
            {generateListings()}
        </Box>
    </Box>
}

export default Browse;