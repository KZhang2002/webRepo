import styles from "../../static/StyleSheet";
import { Box, Icon } from "@mui/material";
import { ModeComment } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ListingReview (props) {
    return (
        <div style={styles.listingReview} id="reviewButton">
            <Icon sx={{color: '#3c3c3c'}}><ModeComment/></Icon>
            <Link to={`/listing?product=${props.listingId}`} style={styles.reviewText}>5 Reviews</Link>
        </div>
    )
}