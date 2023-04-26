import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addListing } from '../../api/api';
import ErrorText from '../typography/ErrorText';

const AddListingDialog = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [bid, setBid] = useState(0);
    const [imageURL, setImageURL] = useState("")
    const [err, setErr] = useState("");

    const handleClose = () => {
        props.setDialogOpen(false);
    }

    const handleAddListing = () => {
        if (title && desc && bid) {
            let token = localStorage.getItem("userProfile");
            addListing(title, bid, token, desc, imageURL).then(() => {
                handleClose();
                props.setLoad(true);
            })  
        }
        else {
            setErr("Insufficient information provided.")
        }
    }

    return (
        <Dialog open={props.dialogOpen} onClose={handleClose}>
            <DialogTitle>Add Listing</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Something you'd like to sell?
                </DialogContentText>
                <TextField
                    onChange={(e) => { setTitle(e.target.value) }}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={(e) => { setDesc(e.target.value) }}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Description"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={(e) => { setBid(e.target.value) }}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Starting Bid"
                    type="number"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={(e) => { setImageURL(e.target.value) }}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Image URL"
                    type="email"
                    fullWidth
                    variant="standard"
                />

                {err ? <ErrorText>{err}</ErrorText> : <></>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddListing}>Add Listing</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddListingDialog