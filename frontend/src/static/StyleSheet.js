import { BG_COLOR } from "./Content";

const styles = {
    loginBox: {
      width: '30rem',
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
      justifyContent: "space-around",
      background: "white",
      borderRadius: 25,

    },
    loginPage: {
        width: '100%',
        height: '100%',    
        display: "flex",
        alignItems: "center",
        justifyContent: "center",        
        background: BG_COLOR,            
    },
    loginInput: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    loginInputItem: {
        marginTop: '1rem',
    },
    titleText: {
        fontSize: 24,
    },
    errorText: {
        color: "red",
        fontSize: 14,
        fontWeight: 600,
    },
    pageTitleText: {
        fontSize: 36,
    },
    breadcrumbBox: {
      display: "flex",
      flexDirection: "row"
    },
    page: {
      padding: '2rem'
    }
  };

export default styles;