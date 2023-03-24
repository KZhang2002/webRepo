import { Box } from "@mui/material";
import styles from "../static/StyleSheet";
import PageTitleText from '../components/typography/PageTitleText'

function Browse (props) {
    return <Box style={styles.page}>
        <PageTitleText>Browse Listings</PageTitleText>
    </Box>
}

export default Browse;