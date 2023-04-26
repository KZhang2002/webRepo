import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { addListingBid } from "../../api/api";

const AddBidDialog = (props) => {

    const [bidValue, setBidValue] = useState();

    const token = localStorage.getItem("userProfile")

    const handleAddBid = () => {
        addListingBid(token, bidValue, props.id).then((data) => {
            console.log(data)
        })
        props.setOpen(false)
    }

    return (
        <Dialog open={props.open}>
            <DialogTitle>
                Place a new bid
            </DialogTitle>
            <DialogContent>

                <TextField variant="outlined" type="number" value={bidValue} onChange={(e) => { setBidValue(e.target.value) }}>

                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {handleAddBid()}}>
                    Place Bid
                </Button>
                <Button onClick={() => { props.setOpen(false) }}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );

}

export default AddBidDialog;