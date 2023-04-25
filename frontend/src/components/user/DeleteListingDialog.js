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

const DeleteListingDialog = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState(0);
    const [bid, setBid] = useState(0);
    const [imageURL, setImageURL] = useState("")
    const [err, setErr] = useState("");

    const handleClose = () => {
        props.setDialogOpen(false);
    }

    const handleAddListing = () => {
        if (title && desc && price && amount && bid) {
            props.setLoad(true);
            let token = localStorage.getItem("userProfile");
            addListing(title, price, token, desc, imageURL).then(() => {
                handleClose();
            })  
        }
        else {
            setErr("Insufficient information provided.")
        }
    }

    return (
        <Dialog open={props.dialogOpen} onClose={handleClose}>
            <DialogTitle>Delete Listing</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this listing?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddListing}>Delete Listing</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteListingDialog;