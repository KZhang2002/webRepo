import { Box, Button, Divider } from "@mui/material"
import styles from "../../static/StyleSheet"
import PriceText from "../typography/PriceText";
import DateText from "../typography/DateText";
import DescriptionText from "../typography/DescriptionText";
import ListingTitleText from "../typography/ListingTitleText";
import ListingReview from "./ListingReview";
import { useEffect, useState } from "react";
import { getUser } from "../../api/api";
import { Link } from "react-router-dom";
import AddBidDialog from "../listing/AddBidDialog";

const ListingCard = (props) => {

    let listing = props.listing; 
    console.log(listing)
    const [addBidDialogOpen, setAddBidDialogOpen] = useState(false)

    return (
        <Box style={styles.listingCard}>
            <img style={{ borderRadius: "10px 10px 0px 0px", objectFit: "cover", width: "100%", height: 250 }} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1";
            }} src={listing.imagelink} />
            <Box style={styles.listingHeader}>
                <Box style={styles.titleDateHeader}>
                    <ListingTitleText to={`/listing/${listing.id}`}>{listing.title}</ListingTitleText>
                    <DateText date={listing.created} />
                </Box>
                <Box style={{ display: "flex", flexDirection: "column", justifyContent: "right" }}>
                    <PriceText style={{ alignSelf: "flex-end" }}>{listing.starting_bid_price}</PriceText>
                    <Button variant="contained" onClick={() => {setAddBidDialogOpen(true)}} style={{ marginTop: "-6rem" }}>{`Bid: $${listing.current_bid_price || listing.starting_bid_price}`}</Button>
                </Box>
            </Box>
            <AddBidDialog open={addBidDialogOpen} setOpen={setAddBidDialogOpen} id={listing.id}/>
            <Box style={styles.listingBody}>
                <DescriptionText>{listing.item_description}</DescriptionText>
                {props.isOwn ?  <></> : <ListingReview userId={listing.seller_email} />}
                <Link style={{marginBottom: "2rem"}} to={`/user/${listing.seller_email}/`} >{listing.seller_email}</Link>
            </Box>
        </Box>
    )
}

export default ListingCard;

