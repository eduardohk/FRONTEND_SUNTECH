export default (theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
  shadowTop: {
    position: "absolute",
    width: "100%",
    height: "5px",
    top: "0px",
    right: "0px",
    left: "0px",
    boxShadow: "inset 0 5px 6px -6px rgba(0,0,0,0.9)",
  },
  shadowBottom: {
    position: "absolute",
    width: "100%",
    height: "5px",
    right: "0px",
    left: "0px",
    bottom: "0px",
    boxShadow: "inset 0 -5px 6px -6px rgba(0,0,0,0.9)",
  },
});
