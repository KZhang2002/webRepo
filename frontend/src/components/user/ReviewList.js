import { PanoramaHorizontalSelectSharp } from '@mui/icons-material'
import { Rating } from './Rating'
import { useState } from 'react'
import { getReviews } from '../../api/api'
import { useEffect } from 'react'

export const ReviewList = (props) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        console.log(props.email)
        getReviews(props.email).then((user) => {
            console.log(user)
            setReviews(user.data)
        })
    }, [])

    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "2rem"}}>
            {(reviews.length === 0) ? <BasicCard /> :
                reviews.map((review) =>
                    <Review
                        review={review}
                        key={review.id} />
                )
            }
        </div>
    )
}

function BasicCard() {
    return (
        <div className="card border-0 mb-4 px-3 py-2 w-100 align-items-center align-center" style={{ backgroundColor: "#F8F9FA" }}>
            <span className="align-center py-1">There are no reviews for this seller yet.</span>
        </div>
    )
}

function Review({ review }) {

    const formatName = (name) => {
        return name ? `${name.charAt(0).toUpperCase()}${name.substring(1)}` : ""
    }

    return (
        <div style={{width: "50%"}}>
            <div className="card mb-3 pb-1">
                <div className="card-body px-4 pt-3 pb-2">
                    <div className="row">
                        <p className="col card-text text-muted text-start mb-1">{`${formatName(review.first_name)} ${formatName(review.last_name)}`}</p>
                        <p className="col card-text text-muted text-end mb-1">{new Date(review.snowflake).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }</p>
                    </div>
                    <div className="row">
                        <p className="mt-1 mb-2">{review.review}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}