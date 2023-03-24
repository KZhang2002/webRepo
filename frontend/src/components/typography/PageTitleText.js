import styles from "../../static/StyleSheet"

function PageTitleText (props) {
    return <div style={{...props.style, ...styles.pageTitleText}}>{props.children}</div>
}

export default PageTitleText;