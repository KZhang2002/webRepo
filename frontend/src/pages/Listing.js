import styles from "../static/StyleSheet";
import { Box } from "@mui/material";

// import { useState, useEffect, useContext } from 'react'
// import { ReviewList } from '../components/listing/ReviewList'
// import { ReviewForm } from '../components/listing/ReviewForm'
// import { useParams, Link } from 'react-router-dom'

function Listing (props) {
    return (
        <Box style={styles}></Box>
    )
    // const {id} = useParams();
    // const [product, setProduct] = useState(null);

    // useEffect(() => {
    //     getProductById(id).then(x => setProduct(x))
    // }, [])

    // const mergeProduct = delta => setProduct({ ...product, ...delta });

    // const onReviewAdded = (review) => {
    //     addReview(id, review)
    //     console.log(review.date)
    //     mergeProduct({ reviews: [...product.reviews, review] })
    // }

    // if (!product) {
    //     return <div>Loading...</div>;
    // }

    // return (
    //     <div className="container mx-auto w-100 px-0">
    //         <ProdBreadcrumb
    //             name={product.name} />
    //         <ProdJumbotron
    //             name={product.name}
    //             imageUrl={product.imageUrl}
    //             price={product.price}
    //             description={product.description} />
    //         <ReviewList reviews={product.reviews} />
    //         <ReviewForm onReviewAdded={onReviewAdded} />
    //     </div>
    // )
}

//Subcomponents
// function ProdBreadcrumb(props) {
//     return (
//         <div className="col">
//             <div className="card border-light p-3" style={{ backgroundColor: "#E8ECEE" }}>
//                 <nav aria-label="breadcrumb m-0">
//                     <ol className="breadcrumb m-0">
//                         <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Tasty snacks</Link></li> {/*change to dynamic link in future assignment*/}
//                         <li className="breadcrumb-item active" aria-current="page">{props.name}</li>
//                     </ol>
//                 </nav>
//             </div>
//         </div>
//     )
// }

// function ProdJumbotron(props) {
//     const { addToCart } = useContext(CartContext);

//     const handleClick = () => {
//         addToCart(props); // pass the product to addToCart
//     }

//     return (
//         <div className="col">
//             <div className="card border-light mt-2 py-5" style={{ backgroundColor: "#F8F9FA" }}>
//                 <div className="container row">
//                     <div className="col-md-4 p-0">
//                         <img src={props.imageUrl} className="img-fluid"></img>
//                     </div>
//                     <div className="textSection col p-4 ">
//                         <div className="jumbotron">
//                             <h1 className="display-4">{props.name}</h1>
//                             <h2 className="lead">
//                                 <span className="badge bg-primary py-2">
//                                     <h3 className="my-0 mx-1"><b>${props.price}</b></h3>
//                                 </span>
//                             </h2>
//                             <p className="lead py-2">{props.description}</p>
//                         </div>
//                     </div>
//                     <div className="d-flex justify-content-end p-4">
//                         <Link to='/cart' className="ml-auto">
//                             <button onClick={handleClick} type="button" className="btn btn-warning mx-auto py-2 ml-auto"><h5>Add To Cart</h5></button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Listing;