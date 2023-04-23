import styles from "../static/StyleSheet";
import { Box } from "@mui/material";
import { UserCard } from '../components/user/UserCard'

import { useState, useEffect, useContext } from 'react'
// import { ReviewList } from '../components/listing/ReviewList'
// import { ReviewForm } from '../components/listing/ReviewForm'
import { useParams, Link } from 'react-router-dom'
// import { getProductById } from '../api/api'
//, addReview

function Listing (props) {
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
        console.log("review was \"added\"")
        // addReview(id, review)
        // console.log(review.date)
        // mergeProduct({ reviews: [...product.reviews, review] })
    }

    const product = {
        name:"Delicious Lorem Ipsum!",
        imageUrl:"https://placehold.jp/150x150.png",
        price:"1.99",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        reviews:"",
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div id="background" style={{ ...styles.page }}>
            <div className="container mx-auto w-100 px-0">
                <ProdJumbotron
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description} />
                <SellerCards/>
                {/* <ReviewList reviews={product.reviews} />
                <ReviewForm onReviewAdded={onReviewAdded} /> */}
            </div>
        </div>
    )
}

//Subcomponents
function SellerCards(props) {
    return (
        <div className="row container mx-auto px-0">
            <div className="col ps-0">
                <div className="card border-0 py-3 px-2 my-4" style={{ backgroundColor: "#EEEEEE" }}>
                    <div className="column container">
                        <div className="row">
                            <h4 className="m-0"><b>Seller Information:</b></h4>
                        </div>
                        <div className="row">
                            <UserCard/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 pe-0">
                <div className="card border-0 p-3 my-4 col" style={{ backgroundColor: "#EEEEEE" }}>
                    <div className="column container">
                        <div className="row">
                            <h4 className="m-0"><b>Contact Information:</b></h4>
                        </div>
                        <div className="row">
                            <UserCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProdJumbotron(props) {
    // const { addToCart } = useContext(CartContext);

    // const handleClick = () => {
    //     addToCart(props); // pass the product to addToCart
    // }

    return (
        <div className="col">
            <div className="card border-0 mt-2" style={{ backgroundColor: "#F8F9FA" }}>
                <div className="container row">
                    <div className="d-flex col-md-4 p-5 align-items-center" style={styles.listingImageFrame}>
                        <img src={props.imageUrl} className="img-fluid" style={styles.listingImage}></img>
                    </div>
                    <div className="textSection col px-0 py-5">
                        <div className="jumbotron">
                            <h1 className="display-4 pb-2"><b>{props.name}</b></h1>
                            <h2 className="lead">
                                <span className="badge py-2" style={styles.listingBadge}>
                                    <h3 className="my-0 mx-1">${props.price}</h3>
                                </span>
                            </h2>
                            <p className="lead py-2">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Listing;