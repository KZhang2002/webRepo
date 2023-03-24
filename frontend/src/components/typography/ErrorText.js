import styles from "../../static/StyleSheet"

function ErrorText (props) {
    return <div style={{...props.style, ...styles.errorText}}>{props.children}</div>
}

export default ErrorText;