import { Accordion, AccordionSummary, AccordionDetails, useScrollTrigger, Button, Box } from "@mui/material";
import { generateListings } from "../../helpers/listingsHelper";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";
import { addListing, getListings } from "../../api/api";
import AddListingDialog from "./AddListingDialog";
import styles from "../../static/StyleSheet";
import Browse, { BrowseContent } from "../../pages/Browse";

export const ProfileMenu = ({ props }) => {

    const [renderedListings, setRenderedListings] = useState([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [load, setLoad] = useState(true);

    const handleAddListing = () => {
        setDialogOpen(true)
    }

    useEffect(() => {
        if (load == true) {
            const fetchData = async () => {
                let resp = await getListings();
                return resp;
            }
            fetchData().then((listings) => {
                setRenderedListings(listings.data || []);
            })
            setLoad(false)
        }
    }, [load])

    return (
        <>
            <AddListingDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} setLoad={setLoad}></AddListingDialog>
            <BrowseContent isOwn={true} handleAddListing={handleAddListing} />
        </>
    );
}