export default (theme) => ({
  root: {
    display: "inline-block",
    boxSizing: "border-box",
  },
  field: {
    display: "inline-block",
    minWidth: 15,
    padding: "8px 8px",
    marginBottom: "3px",
    boxSizing: "border-box",
    background: "rgba(0, 0, 0, 0.25)",
    borderRadius: "0.3rem",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.40)",
      cursor: "pointer",
    },
  },
  name: {
    paddingBottom: "3px",
    whiteSpace: "nowrap",
    textAlign: "left",
    font: "Helvetica",
    fontSize: "0.6rem",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  value: {
    whiteSpace: "nowrap",
    textAlign: "center",
    font: "Helvetica",
    fontSize: "0.9rem",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  separator: {
    display: "inline-block",
    padding: "8px 2px",
    boxSizing: "border-box",
  },
});
