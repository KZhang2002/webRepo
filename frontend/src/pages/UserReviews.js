import { ReviewList } from "../components/listing/ReviewList";
import styles from "../static/StyleSheet";
const UserReviews = () => {


    return (<div id="background" style={{ ...styles.listingPage, height: "100%", overflowY: "scroll" }}>
        <ReviewList />
    </div>)
}

export default UserReviews;