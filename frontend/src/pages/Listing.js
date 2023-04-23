import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import { UserCard } from "../components/user/UserCard";

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
    // return (
    //     <Box style={styles}></Box>
    // )
    //const {id} = useParams();
    //const [product, setProduct] = useState(null);

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
        name: "Lorem Ipsum!",
        imageUrl: "https://placehold.jp/150x150.png",
        price: "1.99",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        <div id="background" style={{ ...styles.page }}>
            <div className="container mx-auto w-100 px-0">
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
    return (
        <div className="row container mx-auto px-0">
            <div className="col ps-0">
                <div
                    className="card border-0 py-3 px-3 my-4 h-75"
                    style={{ backgroundColor: "#EEEEEE" }}
                >
                    <div className="column container pb-3">
                        <h4 className="m-0 mb-1">
                            <b>Seller:</b>
                        </h4>
                        <div className="px-2 pb-3">
                            <UserCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-5 pe-0">
                <div
                    className="card border-0 p-3 mt-4 flex-grow-1 h-75"
                    style={{ backgroundColor: "#EEEEEE" }}
                >
                    <div className="column container">
                        <div className="row">
                            <h4 className="m-0">
                                <b>Contact Information:</b>
                            </h4>
                        </div>
                        <div className="row pt-3">
                            <h5>phone number</h5>
                            <h5>email</h5>
                            <h5>optional</h5>
                            <h5>optional</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProdJumbotron(props) {
    // const { addToCart } = useContext(CartContext);

    // const handleClick = () => {
    //     addToCart(props); // pass the product to addToCart
    // }

    return (
        <div className="col">
            <div
                className="card border-0 mt-2"
                style={{ backgroundColor: "#F8F9FA" }}
            >
                <div className="container row">
                    <div
                        className="d-flex col-md-4 p-5 align-items-center"
                        style={styles.listingImageFrame}
                    >
                        <img
                            src={props.imageUrl}
                            className="img-fluid"
                            style={styles.listingImage}
                        ></img>
                    </div>
                    <div className="textSection col px-0 py-5">
                        <div className="jumbotron">
                            <h1 className="display-4 pb-2">
                                <b>{props.name}</b>
                            </h1>
                            <div className="row">
                                <h2 className="lead col-2 my-auto">
                                    <span
                                        className="badge py-2"
                                        style={styles.listingBadge}
                                    >
                                        <h3 className="my-0 mx-1">
                                            ${props.price}
                                        </h3>
                                    </span>
                                </h2>
                                <div className="col-6 my-auto">
                                    <h4 className="my-0">
                                        Auction ends at {props.endDate.time} on {props.endDate.date}
                                    </h4>
                                </div>
                                <div className="col-3 my-auto">
                                    <BidHistoryDialog />
                                </div>
                            </div>
                            <p className="lead py-2">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BidHistoryDialog() {
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

    const bids = [
        {name: "johnproctor77", bid: "3.00", time: "3:24 pm", date: "4/20"},
        {name: "sarahgood23", bid: "3.00", time: "3:24 pm", date: "4/20"},
        {name: "deodatlawson49", bid: "3.00", time: "3:24 pm", date: "4/20"},
        {name: "marthacorey20", bid: "3.00", time: "3:24 pm", date: "4/20"},
    ]

    return (
        <div>
            <Button onClick={handleClickOpen("paper")}>See bid history</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth="true"
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
                            <tr>
                                <th className="col">Name</th>
                                <th className="col">Bid</th>
                                <th className="col">Time</th>
                                <th className="col">Date</th>
                            </tr>
                            <tbody class="table-group-divider">
                            {bids.map(
                                bid => (
                                <tr>
                                    <td>{bid.name}</td>
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
