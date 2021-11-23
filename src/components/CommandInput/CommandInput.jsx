import React, { useRef, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import styles from "./styles";

export const CommandInput = withStyles(styles)((props) => {
  const {
    classes,
    focused,
    setFocused,
    command,
    setCommand,
    getPreviousCommand,
    getFollowingCommand,
    onSubmit,
  } = props;
  const inputRef = useRef();

  const onChange = (evt) => {
    setCommand(evt.target.value);
  };

  const onKeyUp = (evt) => {
    if (evt.keyCode === 13 && evt.target.value) {
      evt.preventDefault();
    }
    if (evt.keyCode === 38) {
      evt.preventDefault();
    }
    if (evt.keyCode === 40) {
      evt.preventDefault();
    }
  };

  const onKeyDown = (evt) => {
    if (evt.keyCode === 13 && evt.target.value) {
      evt.preventDefault();
      onSubmit();
    }
    if (evt.keyCode === 38) {
      evt.preventDefault();
      getPreviousCommand();
    }
    if (evt.keyCode === 40) {
      evt.preventDefault();
      getFollowingCommand();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (focused) inputRef.current.focus();
  }, [focused]);

  return (
    <div className={classes.root}>
      <ChevronRightIcon
        classes={{
          root: focused ? classes.firstArrowFocused : classes.firstArrow,
        }}
      />
      <ChevronRightIcon
        classes={{
          root: focused ? classes.secondArrowFocused : classes.secondArrow,
        }}
      />
      <input
        ref={inputRef}
        type="text"
        placeholder='Informe um comando, e.g. "ST300CMD;907158194;02;StatusReq" '
        value={command}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={classes.input}
      />
    </div>
  );
});

export default CommandInput;
