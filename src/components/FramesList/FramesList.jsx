import React, { useState, useRef, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Frame from "../Frame";

import styles from "./styles";

export const FramesList = withStyles(styles)((props) => {
  const { classes, frames } = props;
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [scrollAtBottom, setScrollAtBottom] = useState(true);
  const componentRef = useRef();

  const handleScroll = (evt) => {
    setScrollAtTop(componentRef.current.scrollTop === 0);
    setScrollAtBottom(
      componentRef.current.scrollHeight - componentRef.current.scrollTop ===
        componentRef.current.clientHeight
    );
  };

  useEffect(() => {
    if (componentRef && scrollAtBottom) {
      componentRef.current.scrollTop =
        componentRef.current.scrollHeight - componentRef.current.clientHeight;
    }
  }, [frames, scrollAtBottom]);

  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        ref={componentRef}
        onScroll={handleScroll}
      >
        {frames.map((frame) => (
          <Frame key={frame.id} frame={frame} />
        ))}
      </div>
      {!scrollAtTop && <div className={classes.shadowTop} />}
      {!scrollAtBottom && <div className={classes.shadowBottom} />}
    </div>
  );
});

export default FramesList;
