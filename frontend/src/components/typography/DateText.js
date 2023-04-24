import styles from "../../static/StyleSheet"

function DateText (props) {
    const dateText = new Date(props.date).toLocaleDateString("en-US");
    return <div style={{...props.style, ...styles.dateText}}>{dateText}</div>
}

export default DateText;