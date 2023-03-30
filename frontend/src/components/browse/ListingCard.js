import { Box, Divider } from "@mui/material"
import styles from "../../static/StyleSheet"
import { LISTING } from "../../static/Content"
import PriceText from "../typography/PriceText";
import DateText from "../typography/DateText";
import DescriptionText from "../typography/DescriptionText";
import ListingTitleText from "../typography/ListingTitleText";
import { Comment, CommentBank, ModeComment } from "@mui/icons-material";
import ListingReview from "./ListingReview";

const ListingCard = (props) => {

    const listing = LISTING;

    return (
        <Box style={styles.listingCard}>
            <Box style={styles.listingHeader}>
                <Box style={styles.titleDateHeader}>
                    <ListingTitleText to={`/listing?product=${listing.id}`}>{listing.name}</ListingTitleText>
                    <DateText date={listing.date}/>
                </Box>
                <PriceText>{listing.price}</PriceText>
            </Box>
            <Divider/>
            <Box style={styles.listingBody}>
                <DescriptionText>{listing.description}</DescriptionText>
                <ListingReview/>
            </Box>
        </Box>
    )
}

export default ListingCard;

