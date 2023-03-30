import { Box } from "@mui/material";
import styles from "../static/StyleSheet";
import ListingsToolbar from "../components/browse/ListingsToolbar";
import { generateListings } from "../helpers/listingsHelper";
import { useParallax } from 'react-scroll-parallax';

function BrowseContent(props) {

    return (
        <Box id="listings" style={{...styles.listingsContainer}}>
            <ListingsToolbar />
            {generateListings()}
        </Box>
    )
}

function Browse(props) {

    return <div id="background" style={{...styles.page}}>
        <BrowseContent/>
    </div>
}

export default Browse;