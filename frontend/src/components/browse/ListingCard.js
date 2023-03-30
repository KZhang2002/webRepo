import { Box, Divider } from "@mui/material"
import styles from "../../static/StyleSheet"
import PriceText from "../typography/PriceText";
import DateText from "../typography/DateText";
import DescriptionText from "../typography/DescriptionText";
import ListingTitleText from "../typography/ListingTitleText";
import ListingReview from "./ListingReview";

const ListingCard = (props) => {

    let listing = props.listing;

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
                <ListingReview listingId={listing.id}/>
            </Box>
        </Box>
    )
}

export default ListingCard;

