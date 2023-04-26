import { generateListings } from "../../helpers/listingsHelper";
import AddListingDialog from "./AddListingDialog";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { addListing, getListings } from "../../api/api";
import styles from "../../static/StyleSheet";
import Browse, { BrowseContent } from "../../pages/Browse";

export const ProfileMenu = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [load, setLoad] = useState(true);

    const handleAddListing = () => {
        setDialogOpen(true)
    }


    return (
        <>
            <AddListingDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} setLoad={setLoad}></AddListingDialog>
            <BrowseContent setLoad={setLoad} load={load} isOwn={props.isOwn} handleAddListing={handleAddListing} />
        </>
    );
};
