import { Rating } from './Rating'

export const ReviewList = ({ reviews = [
    {id: 3, user: 11, review: "This guy sucks. He took my wife and kids.", seller: 12, rating: 1, snowflake: "2023-04-24 15:41:37"},
    {id: 2, user: 9, review: "Blegh!", seller: 12, rating: 3, snowflake: "2023-04-24 15:41:37"},
    {id: 1, user: 12, review: "This guy is great. He gave me my wife and kids.", seller: 12, rating: 5, snowflake: "2023-04-24 15:41:37"}
] }) => <>
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
        <h4 style={{ fontWeight: 600, color: "#aaaaaa"}}>
            <span className="text-white">Product Reviews </span>({value})
        </h4>
    );
}

function BasicCard() {
    return (
        <div className="card border-0 mb-4 px-3 py-2" style = {{backgroundColor: "#F8F9FA"}}>
            <span className="align-center py-1">There are no reviews for this seller yet.</span>
        </div>
    )
}

function Review({review}) {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        console.log(review.email)
        getUser(review.email).then((user) => {
            console.log(user)
            setUserInfo({ ...user.data });
            console.log(user)
        })
    }, [])

    return (
        <div className="col">
            <div className="card mb-3 pb-1">
                <div className="card-header py-3 px-4">
                    <Rating value={review.rating}/>
                </div>
                <div className="card-body px-4 pt-3 pb-2">
                    <div className="row">
                        <p className="col card-text text-muted text-start mb-1">{userInfo.userName}</p>
                        <p className="col card-text text-muted text-end mb-1">{review.date}</p>
                    </div>
                    <div className="row">
                        <p className="mt-1 mb-2">"{review.review}"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}