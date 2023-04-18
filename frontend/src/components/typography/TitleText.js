import styles from "../../static/StyleSheet"

function TitleText (props) {
    return <div style={{...props.style, ...styles.titleText}}>{props.children}</div>
}

export default TitleText;