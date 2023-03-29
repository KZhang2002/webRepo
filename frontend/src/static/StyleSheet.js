import { BG_COLOR, BG_URL } from "./Content";

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
    backgroundImage: BG_URL,
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
    marginLeft: "1rem",
    color: "#e3e3e3",
  },
  priceText: {
    fontSize: 24,
    fontWeight: 600,
  },
  dateText: {
    fontSize: 14,
    color: "#6c6c6c",
    fontWeight: 400,
  },
  descriptionText: {
    fontSize: 14,
    color: "#3c3c3c",
  },
  listingTitleText: {
    fontSize: 24,
  },
  breadcrumbBox: {
    display: "flex",
    flexDirection: "row",
    height: 10,
  },
  page: {
    padding: "2rem",
    paddingTop: "8rem",
    paddingBottom: "4rem",
    height: "calc(100%)",
    background: BG_COLOR,
    backgroundImage: BG_URL,
  },
  listingsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  listingCard: {
    background: "#e3e3e3",
    borderRadius: 5,
    padding: "2rem",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    minWidth: "20rem",
    maxWidth: "25%",
    height: "10rem",
  },
  listingHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "1rem"
  },
  titleDateHeader: {
    display: "flex",
    flexDirection: "column",
  },
  listingBody: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: "1rem",
  },
  listingsToolbar: {
    width: "88%",
    height: "4rem",
    justifyContent: "left",
    alignItems: "center",
    display: "flex", 
    flexDirection: "row",
    marginBottom: "1rem",
  },
  headerToolbar: {
    display: "flex", 
    flexDirection: "row", alignItems: "top", 
    height: 100, 
    paddingLeft: "2rem"
  }
};

export default styles;