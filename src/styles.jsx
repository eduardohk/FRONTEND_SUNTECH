export default (theme) => ({
  root: {
    width: "100vw",
    minWidth: "576px",
    height: "100vh",
  },
  "@media (max-width: 768px)": {
    root: {
      height: "calc(100vh - 7px)",
    },
  },
  framesListContainer: {
    height: "calc(100% - 40px)",
  },
  inputsContainer: {
    height: "40px",
  },
});
