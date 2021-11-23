export default (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexGrow: "1",
    height: "100%",
    alignItems: "center",
  },
  firstArrowFocused: {
    fontSize: "1.7rem",
    marginLeft: "-3px",
    color: "rgba(0, 0, 0, 0.9)",
  },
  secondArrowFocused: {
    fontSize: "1.7rem",
    marginLeft: "-18px",
    color: "rgba(0, 0, 0, 0.9)",
  },
  firstArrow: {
    fontSize: "1.7rem",
    marginLeft: "-3px",
    color: "rgba(0, 0, 0, 0.3)",
  },
  secondArrow: {
    fontSize: "1.7rem",
    marginLeft: "-18px",
    color: "rgba(0, 0, 0, 0.3)",
  },
  input: {
    display: "flex",
    flexGrow: "1",
    height: "80%",
    boxSizing: "border-box",
    padding: "3px 5px",
    marginLeft: "-8px",
    border: 0,
    background: "none",
    font: "Helvetica",
    fontSize: "0.9rem",
    fontWeight: "500",
    letterSpacing: "1px",
    outline: "none",
  },
});
