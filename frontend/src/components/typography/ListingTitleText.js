import { Link } from "react-router-dom";
import styles from "../../static/StyleSheet"

function ListingTitleText (props) {
    return <Link to={props.to} style={{...props.style, ...styles.listingTitleText}}>{`${props.children}`}</Link>
}

export default ListingTitleText;