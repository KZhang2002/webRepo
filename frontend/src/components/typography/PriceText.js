import styles from "../../static/StyleSheet"

function PriceText (props) {
    return <div style={{...props.style, ...styles.priceText}}>{`$${props.children}`}</div>
}

export default PriceText;