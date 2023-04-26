import { Box, Button, Divider, IconButton } from "@mui/material"
import styles from "../../static/StyleSheet"
import PriceText from "../typography/PriceText";
import DateText from "../typography/DateText";
import DescriptionText from "../typography/DescriptionText";
import ListingTitleText from "../typography/ListingTitleText";
import ListingReview from "../browse/ListingReview";
import { useEffect, useState } from "react";
import { getUser } from "../../api/api";
import { Delete, Edit } from "@mui/icons-material";
import EditListingDialog from "../user/EditListingDialog";
import DeleteListingDialog from "../user/DeleteListingDialog";

const ProfileListingCard = (props) => {

    let listing = props.listing;
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [load, setLoad] = useState(false);

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
                </Box>
            </Box>
            <Box style={{ ...styles.listingBody, paddingBottom: '2rem' }}>
                <DescriptionText>{listing.item_description}</DescriptionText>
                <Box style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", marginRight: "-1rem", marginBottom: "-1rem"}}>
                    <IconButton><Edit onClick={() => {setEditDialogOpen(true)}} /></IconButton>
                    <IconButton><Delete onClick={() => {setDeleteDialogOpen(true)}}/></IconButton>
                    <EditListingDialog dialogOpen={editDialogOpen} setDialogOpen={setEditDialogOpen} setLoad={setLoad} />
                    <DeleteListingDialog dialogOpen={deleteDialogOpen} setDialogOpen={setDeleteDialogOpen} setLoad={setLoad} />
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileListingCard;

