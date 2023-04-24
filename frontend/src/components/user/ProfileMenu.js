import { Box } from "@mui/material";
import { generateListings } from "../../helpers/listingsHelper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
        <div>
            <Box sx={{ width: 1500, height: 50, backgroundColor: "#e0e0e0" }}>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            
                        >
                            Listings
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            
                        >
                            Reviews
                        </button>
                    </li>
                </ul>
            </Box>
            <div class="tab-content" id="pills-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    tabindex="0"
                >
                    {generateListings(3)}
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    tabindex="0"
                >
                    ...
                </div>
            </div>
        </div>
    );
};
