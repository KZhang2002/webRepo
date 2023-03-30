import styles from "../../static/StyleSheet";
import { Box, Icon } from "@mui/material";
import { ModeComment } from "@mui/icons-material";

export default function ListingReview (props) {
    return (
        <Box style={styles.listingReview}>
            <Icon sx={{color: '#3c3c3c'}}><ModeComment/></Icon>

            <div style={styles.reviewText}>5 reviews</div>
        </Box>
    )
}