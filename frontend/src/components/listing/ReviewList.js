import { Rating } from './Rating'

export const ReviewList = ({ reviews = [] }) => <>
    <div className="mt-4 mx-0 px-0">
        <Header value={reviews.length} />
        {(reviews.length === 0) ? <BasicCard /> : 
                reviews.map((review) =>
                    <Review 
                        review={review}
                        key={review.id}/>
                )
            }
    </div>
</>;

//Subcomponents
function Header({value = 0}) {
    return (
        <h4 className="text-muted" style ={{fontWeight: 600}}><span className="text-body">Product Reviews </span>({value})</h4>
    )
}

function BasicCard() {
    return (
        <div className="card border-light mb-4 px-3 py-2" style = {{backgroundColor: "#F8F9FA"}}>
            <span className="align-center py-1">Be the first to add a review!</span>
        </div>
    )
}

function Review({review}) {
    return (
        <div className="col">
            <div className="card mb-3 pb-1">
                <div className="card-header py-3 px-4">
                    <Rating value={review.rating}/>
                </div>
                <div className="card-body px-4 pt-3 pb-2">
                    <div className="row">
                        <p className="col card-text text-muted text-start mb-1">{review.userName}</p>
                        <p className="col card-text text-muted text-end mb-1">{review.date}</p>
                    </div>
                    <div className="row">
                        <p className="mt-1 mb-2">"{review.comment}"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}