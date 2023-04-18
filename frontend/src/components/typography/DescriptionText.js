import styles from "../../static/StyleSheet"

function DescriptionText (props) {
    return <div style={{...props.style, ...styles.descriptionText}}>{`${props.children}`}</div>
}

export default DescriptionText;