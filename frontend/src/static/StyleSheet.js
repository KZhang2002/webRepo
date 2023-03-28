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
    },
    profileHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'flex-start',
      width: '100vmin',
      height: '10vh',
      padding: '3vmin',
      backgroundColor: "#EEEEEE",
      margin: '4vmin auto',
    },
    profileNameSection: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      margin: '0 2vmax'
    },
    profileName: {
      margin: 0,
      alignSelf: 'flex-start'
    },
    profileEmail: {
      margin: 0,
      color: '#555555',
      alignSelf: 'flex-start'
    }
  };

export default styles;