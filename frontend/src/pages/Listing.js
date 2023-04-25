import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import UserCard from "../components/user/UserCard";
import { useLocation }from "react-router-dom"
import { getListing } from "../api/api";

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

    const product = {
        name: listing.title,
        imageUrl: listing.imagelink,
        price: listing.price,
        description: listing.item_description,
        reviews: "",
        endDate: {
            time: "23:23",
            date: "12/20"
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div id="background" style={{ ...styles.listingPage }}>
            <div className="container mx-auto w-100 px-0 pt-3 pb-2">
                <ProdJumbotron
                    {...product}
                />
                <SellerCards />
                {/* <ReviewList reviews={product.reviews} />
                <ReviewForm onReviewAdded={onReviewAdded} /> */}
            </div>
        </div>
    );
}

//Subcomponents
function SellerCards(props) {
    const bids = [
        {name: "johnproctor77", bid: "3.00", time: "3:24 pm", date: "4/20"},
        {name: "sarahgood23", bid: "3.00", time: "3:24 pm", date: "4/20"},
        {name: "deodatlawson49", bid: "3.00", time: "3:24 pm", date: "4/20"},
        {name: "marthacorey20", bid: "3.00", time: "3:24 pm", date: "4/20"},
    ]
    const productInfo = {
        endDate: {
            date: new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}),
            time: "15:30 PM",
        }
    }

    return (
        <div className="row container mx-auto pb-0 px-0">
            <div className="col ps-0">
                <div
                    className="card border-0 p-3 mt-4 mb-2 h-75"
                    style={{ backgroundColor: "#EEEEEE" }}
                >
                    <div className="column container pb-2">
                        <h4 className="m-0 mb-1">
                            <b>Seller Information:</b>
                        </h4>
                        <div className="px-2 pb-3">
                            <UserCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-5 pe-0">
                <div
                    className="card border-0 p-3 my-4 flex-grow-1 h-75"
                    style={{ backgroundColor: "#EEEEEE" }}
                >
                    <div className="column container">
                        <div className="row">
                            <h4 className="m-0">
                                <b>Details:</b>
                            </h4>
                            <div className="row my-auto">
                                    <h2 className="my-0 pt-2 pb-0 lh-sm">
                                        Auction ending at <b>{productInfo.endDate.time}</b> <br/>on <b>{productInfo.endDate.date}</b>
                                    </h2>
                                </div>
                                <div className="row my-auto pt-3">
                                    <BidHistoryDialog bids={bids}/>
                                </div>
                        </div>
                        <div className="row pt-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProdJumbotron(props) {
    return (
        <div className="col">
            <div
                className="card border-0"
                style={{ backgroundColor: "#F8F9FA" }}
            >
                <div className="container row">
                    <div
                        className="d-flex col-md-4 p-5 align-items-center"
                        style={styles.listingImageFrame}
                    >
                        <img
                         onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1";
                        }} 
                            src={props.imageUrl}
                            className="img-fluid"
                            style={styles.listingImage}
                        ></img>
                    </div>
                    <div className="textSection col px-0 py-5">
                        <div className="jumbotron">
                            <h1 className="display-4 pb-2">
                                <strong><b>{props.name}</b></strong>
                            </h1>
                            <div className="row">
                                <h2 className="lead col-2 my-auto">
                                    <span
                                        className="badge py-2"
                                        style={styles.listingBadge}
                                    >
                                        <h3 className="my-0 mx-1">
                                            <b>${props.price}</b>
                                        </h3>
                                    </span>
                                </h2>
                            </div>
                            <p className="lead py-2">{props.description}</p>
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

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
        <div>
            <Button size="large" variant="contained" onClick={handleClickOpen("paper")}>See bid history</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="md"
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
                                    <th className="col">Time</th>
                                    <th className="col">Date</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                            {props.bids.map(
                                (bid, index) => (
                                <tr key={index}>
                                    <td >{bid.name}</td>
                                    <td>${bid.bid}</td>
                                    <td>{bid.time}</td>
                                    <td>{bid.date}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose}>Place Bid</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Listing;
