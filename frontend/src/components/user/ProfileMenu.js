import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { generateListings } from "../../helpers/listingsHelper";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const ProfileMenu = ({props}) => {
    return(
        <Accordion style={{width: "100%"}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <h4>Listings</h4>
            </AccordionSummary>
                <AccordionDetails>
                    {generateListings(3)}
                </AccordionDetails>
        </Accordion>
    );
}