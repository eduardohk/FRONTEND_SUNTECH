import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import socketIOClient from "socket.io-client";
import FramesList from "./components/FramesList";
import Inputs from "./components/Inputs";

import styles from "./styles";

export const App = withStyles(styles)((props) => {
  const { classes } = props;
  const [socketIO, setSocketIO] = useState(null);
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    const io = socketIOClient(
      `http://${window.location.href.split("//")[1].split(":")[0]}:${
        process.env.REACT_APP_PORT
      }`
    );
    setSocketIO(io);
    io.on("report", function (report) {
      setFrames((frames) => [...frames, JSON.parse(report)]);
    });
    io.on("response", function (report) {
      setFrames((frames) => [...frames, JSON.parse(report)]);
    });
    io.on("error", function (error) {
      setFrames((frames) => [
        ...frames,
        { ...JSON.parse(error), id: uuidv4() },
      ]);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.framesListContainer}>
        <FramesList frames={frames} />
      </div>
      <div className={classes.inputsContainer}>
        <Inputs socketIO={socketIO} />
      </div>
    </div>
  );
});

export default App;
