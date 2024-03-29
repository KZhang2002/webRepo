import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import UserCard from "../components/user/UserCard";
import { useLocation } from "react-router-dom"
import { getListing, getListingBids } from "../api/api";

import { useState, useEffect, useRef } from "react";
// import { ReviewList } from '../components/listing/ReviewList'
// import { ReviewForm } from '../components/listing/ReviewForm'
import { useParams, Link } from "react-router-dom";
// import { getProductById } from '../api/api'
//, addReview
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddBidDialog from "../components/listing/AddBidDialog";
import { Chip } from "@mui/material";

function Listing(props) {
    //const {id} = useParams();
    //const [product, setProduct] = useState(null);
    const location = useLocation();
    const listingId = location.pathname.split("/").pop()
    const [listing, setListing] = useState({})

    useEffect(() => {
        getListing(listingId).then((data) => {
            console.log(data)
            setListing(data.data)
        })
    }, [])

    // const {id} = useParams();
    // const [product, setProduct] = useState(null);
    // useEffect(() => {
    //     getProductById(id).then(x => setProduct(x))
    // }, [])

    //const mergeProduct = delta => setProduct({ ...product, ...delta });

    const onReviewAdded = (review) => {
        console.log('review was "added"');
        // addReview(id, review)
        // console.log(review.date)
        // mergeProduct({ reviews: [...product.reviews, review] })
    };
    return (
        <div id="background" style={{ ...styles.listingPage, height: "100%", overflowY: "scroll" }}>
            <div className="container w-100 px-0 pt-3 pb-2" style={{ minWidth: "20rem", marginTop: "8rem" }}>
                <ProdJumbotron
                    id={listingId}
                    {...listing}
                />
                <SellerCards listing={listing} id={listingId} />
                {/* <ReviewList reviews={product.reviews} />
                <ReviewForm onReviewAdded={onReviewAdded} /> */}
            </div>
        </div>
    );
}

//Subcomponents
function SellerCards(props) {
    const bids = [
        { name: "johnproctor77", bid: "3.00", time: "3:24:01 pm", date: "April 20" },
        { name: "sarahgood23", bid: "3.00", time: "3:24:01 pm", date: "April 20" },
        { name: "deodatlawson49", bid: "3.00", time: "3:24:01 pm", date: "April 20" },
        { name: "marthacorey20", bid: "3.00", time: "3:24:01 pm", date: "April 20" },
    ]

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <div className="ps-0" style={{ minWidth: "20rem", width: "100%" }}>
                <div
                    className="card border-0 p-3 mt-4 mb-2"
                    style={{ backgroundColor: "#EEEEEE" }}
                >
                    <div className="column container pb-2">
                        <h4 className="m-0 mb-1">
                            <b>Seller Information</b>
                        </h4>
                        <div className="px-2 pt-2">
                            <UserCard email={props.listing.seller_email} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

function ProdJumbotron(props) {
    const startDate = new Date(props.created)
    const endDate = new Date(props.created)
    endDate.setMonth(startDate.getMonth() + 1)



    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    const productInfo = {
        endDate: {
            date: endDate.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
            time: formatAMPM(endDate)
        }
    }
    return (
        <div className="col">
            <div
                className="card border-0 p-5"
                style={{ backgroundColor: "#F8F9FA" }}
            >
                <div className="container row">
                    <div
                        className="d-flex col-md-4 align-items-center"
                        style={{ ...styles.listingImageFrame, minWidth: "15rem", minHeight: "15rem" }}
                    >
                        <img
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1";
                            }}
                            src={props.imagelink}
                            className="img-fluid"
                            style={styles.listingImage}
                        ></img>
                    </div>
                    <div className="textSection col ps-2">
                        <div className="jumbotron">
                            <h1 className="display-4 pb-2" style={{ minWidth: "20rem" }}>
                                <strong><b>{props.title}</b></strong>
                            </h1>
                            <div className="row">
                                <h2 className="lead col-2 my-auto">
                                    <span
                                        className="badge py-2"
                                        style={styles.listingBadge}
                                    >
                                        <h3 className="my-0 mx-1">
                                            <b>${props.current_bid_price || props.starting_bid_price}</b>
                                        </h3>
                                    </span>
                                </h2>
                            </div>
                            <p className="lead py-2">{props.item_description}</p>
                        </div>
                    </div>
                </div>
                {/* {(props.tags || []).map((value, index) => {
                    return <Chip key={index} style={styles.filterChipStyle} label={`${props.tags[index]}: ${value.value}`}></Chip>
                })} */}
                <div className="pe-0">
                    <div
                        className="card border-0 p-3 my-4 flex-grow-1 h-75"
                        style={{ backgroundColor: "#EEEEEE" }}
                    >
                        <div className="column container">
                            <div className="row">
                                <h4 className="m-0">
                                    <b>Details</b>
                                </h4>
                                <div className="row container my-auto">
                                    <h2 className="mt-2 mb-0 py-0 lh-sm" style={{ fontWeight: 400 }}>
                                        Auction ending at <b>{productInfo.endDate.time}</b> on <b>{productInfo.endDate.date}</b>
                                    </h2>
                                </div>
                                <div className="row container my-auto pt-0 mt-2" >
                                    <div className="d-flex justify-content-end px-0">
                                        <BidHistoryDialog id={props.id} />
                                    </div>

                                </div>
                            </div>
                            <div className="row pt-3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BidHistoryDialog(props) {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState("paper");
    const [bids, setBids] = useState([]);
    const [addBidDialogOpen, setAddBidDialogOpen] = useState(false)

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddBid = () => {
        setAddBidDialogOpen(true)
        handleClose()
    }

    useEffect(() => {
        getListingBids(props.id).then((data) => {
            console.log(data.data)
            setBids(data.data || [])
        })
    }, [open])

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            <AddBidDialog id={props.id} setOpen={setAddBidDialogOpen} open={addBidDialogOpen} />
            <Button size="large" variant="contained" onClick={handleClickOpen("paper")}>See bid history</Button>
            <Dialog
                open={open}
                maxWidth="lg"
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{
                    style: {
                        width: "90vw",
                        maxHeight: "90vh",
                    },
                }}
            >
                <DialogTitle id="scroll-dialog-title">Bid History</DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th className="col">Name</th>
                                    <th className="col">Bid</th>
                                    <th className="col">Date</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {bids.map(
                                    (bid, index) => (
                                        <tr key={index}>
                                            <td >{bid.bidder_email}</td>
                                            <td>${bid.bid}</td>
                                            <td>{new Date(bid.snowflake).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleAddBid}>Place Bid</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Listing;
