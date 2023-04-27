import { BG_COLOR, BG_URL } from "./Content";

const styles = {
  loginBox: {
    maxWidth: '35rem',
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    justifyContent: "space-around",
    background: "white",
    borderRadius: 10,
  },
  loginPage: {
    height: '100%',
    display: "flex",
    alignItems: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
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
    fontSize: 30,
    fontWeight: 200,
  },
  dateText: {
    fontSize: 14,
    color: "#6c6c6c",
    fontWeight: 400,
  },
  descriptionText: {
    height: "2rem",
    fontSize: 14,
    color: "#3c3c3c",
  },
  listingTitleText: {
    fontSize: 24,
  },
  filterTitleText: {
    fontSize: 18,
    paddingLeft: "0.5rem",
    marginBottom: "1rem",
    fontWeight: "600"
  },
  breadcrumbBox: {
    display: "flex",
    flexDirection: "row",
  },
  breadcrumbsTitleText: {
    fontSize: 24,
    fontWeight: 600,
    marginRight: "0.5rem"
  },
  breadcrumbsSepText: {
    fontSize: 26,
    marginRight: "0.5rem"
  },
  breadcrumbsPathText: {
    fontSize: 24,
    fontWeight: 200,
  },
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    paddingTop: "8rem",
    paddingBottom: "2rem",
    minHeight: "100%",
    background: BG_COLOR,
    backgroundImage: BG_URL,
  },
  page2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    paddingTop: "8rem",
    paddingBottom: "2rem",
    height: "100vw",
    background: BG_COLOR,
    backgroundImage: BG_URL,
  },
  listingPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    paddingTop: "0rem",
    paddingBottom: "2rem",
    height: "100%",
    background: BG_COLOR,
    backgroundImage: BG_URL,
  },
  listingsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "1rem",
    height: "100%",
    maxWidth: "100rem",
  },
  listingCard: {
    position: "relative",
    background: "#e3e3e3",
    borderRadius: 5,
    padding: "0rem, 0rem, 2rem, 0rem",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    minWidth: "20rem",
    height: "32rem",
    width: "25%",
    minWidth: "25rem",
    maxWidth: "30rem",
 
  },
  listingHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
    padding: "2rem 2rem 0rem 2rem"
  },
  titleDateHeader: {
    display: "flex",
    flexDirection: "column",
  },
  listingBody: {
    top: "22rem",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    marginTop: "0rem",
    height: "10rem",
    padding: "0rem 2rem 0rem 2rem",
    justifyContent: "space-between"
  },
  listingsToolbar: {
    maxWidth: "79rem",
    width: "calc(75vw + 4rem)",
    height: "4rem",
    justifyContent: "left",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
    alignSelf: "center",
    justifyContent: "center"
  },
  listingReview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "2rem",
    marginTop: "2rem",
    marginLeft: "-0.5rem"
  },
  listingProfileReview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "2rem",
    marginLeft: "-0.5rem"
  },
  reviewText: {
    marginLeft: "0.5rem",
    fontSize: 18,
    fontWeight: 600,
    color: "#3c3c3c",
    textDecoration: "none",
  },
  headerToolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    height: 100,
    paddingLeft: "2rem"
  },
  userHeader: {
    minWidth: "15rem",
    display: 'flex',
    flexWrap: "wrap",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1rem',
    paddingBottom: "1.5rem",
    backgroundColor: "#EEEEEE",
  },
  userNameSection: {
    minWidth: "10rem",
    flexDirection: 'column',
    margin: '0 0 0 2vmax',
    flexGrow: 1
  },
  userName: {
    minWidth: "10rem",
    margin: 0,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  userEmail: {
    minWidth: "10rem",
    margin: 0,
    color: '#555555',
    alignSelf: 'flex-start'
  },
  reputationSection: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    width: '200px'
  },
  reputationText: {
    textAlign: 'right',
    margin: 0,
    color: '#555555',
    alignSelf: 'flex-start',
    fontSize: '0.8rem',
  },
  filterItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  filterMenu: {
    display: "flex",
    flexDirection: "column",
    width: "15rem",
    padding: "1rem",
    justifyContent: "center"
  },
  filterInput: {
    width: "4rem",
    marginLeft: "1rem"
  },
  filterApplyButton: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    marginTop: "1rem",
  },
  filterChipStyle: {
    margin: "0rem 1rem 0rem 0rem",
  },
  listingImageFrame: {
    overflow: "hidden",
  },
  listingImage: {
    width: "100%",
    height: "auto",
    marginLeft: "-0.5rem"
  },
  listingBadge: {
    backgroundColor: "#1976d2",
  }
};

export default styles;