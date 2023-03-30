import { BG_COLOR, BG_URL } from "./Content";

const styles = {
  loginBox: {
    width: '30rem',
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    justifyContent: "space-around",
    background: "white",
    borderRadius: 10,
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
    fontSize: 30,
    fontWeight: 200,
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
    padding: "2rem",
    paddingTop: "8rem",
    paddingBottom: "4rem",
    minHeight: "100%",
    background: BG_COLOR,
    backgroundImage: BG_URL,
  },
  listingsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "2rem"
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
    height: "12rem",
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
    flexDirection: "column",
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
  listingReview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "5rem"
  },
  reviewText: {
    marginLeft: "1rem",
    fontSize: 18,
    fontWeight: 600,
    color: "#3c3c3c"
  },
  headerToolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    height: 100,
    paddingLeft: "2rem"
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  },
  reputationSection: {
    flexDirection: 'column',
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    margin: '0 2vmax'
  },
  reputationText: {
    textAlign: 'right',
    margin: 0,
    color: '#555555',
    alignSelf: 'flex-start',
    fontSize: '0.8rem'
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
  }
};

export default styles;