export default (theme) => ({
  root: {
    padding: "10px",
    margin: "5px",
    borderRadius: "0.5rem",
  },
  information: {
    display: "flex",
    flexDirection: "row",
    flexGrow: "1",
    justifyContent: "space-around",
    font: "Helvetica",
  },
  group: {},
  title: {
    display: "inline-block",
    paddingRight: "5px",
    fontSize: "1rem",
    fontWeight: "600",
  },
  value: {
    display: "inline-block",
    paddingLeft: "5px",
    minWidth: "170px",
    textAlign: "left",
    fontSize: "1rem",
    fontWeight: "700",
  },
  frame: {
    paddingTop: "10px",
  },
});
