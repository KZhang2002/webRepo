import styles from "../../static/StyleSheet";
import { Box, Icon, IconButton } from "@mui/material";
import { ModeComment } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

export default function ListingReview (props) {

    const navigate = useNavigate()

    return (
        <div style={styles.listingReview} id="reviewButton">
            <IconButton style={{marginTop: "0.2rem"}} onClick={() => navigate(`/user/${props.userId}`)} sx={{color: '#3c3c3c'}}><ModeComment/></IconButton>
            <Link to={`/user/${props.userId}/reviews`} style={styles.reviewText}>View Reviews</Link>
        </div>
    )
}