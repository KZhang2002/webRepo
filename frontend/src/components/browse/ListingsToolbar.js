import { Box } from "@mui/material"
import styles from "../../static/StyleSheet";
import SearchBar from "./SearchBar";

const ListingsToolbar = (props) => {
    return <Box style={styles.listingsToolbar}>
        <SearchBar {...props}/>
    </Box>
}

export default ListingsToolbar;