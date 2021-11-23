import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import CommandInput from "../CommandInput";
import SubmitButton from "../SubmitButton";

import styles from "./styles";

export const Inputs = withStyles(styles)((props) => {
  const { classes, socketIO } = props;
  const [focused, setFocused] = useState(false);
  const [command, setCommand] = useState("");
  const [previousCommands, setPreviousCommands] = useState([]);
  const [index, setIndex] = useState(0);
  const [commandBuffer, setCommandBuffer] = useState("");

  const onSubmit = () => {
    socketIO.emit("command", command);
    setPreviousCommands((previousCommands) => {
      return [
        command,
        ...previousCommands.filter(
          (previousCommand) => previousCommand !== command
        ),
      ];
    });
    setIndex(0);
    setCommand("");
    setFocused(true);
  };

  const getPreviousCommand = () => {
    if (index === 0) setCommandBuffer(command);
    if (index < previousCommands.length) setCommand(previousCommands[index]);
    if (index < previousCommands.length - 1) setIndex((index) => index + 1);
  };

  const getFollowingCommand = () => {
    if (index === 0) setCommand(commandBuffer);
    if (index > 0) {
      setCommand(previousCommands[index - 1]);
      setIndex((index) => index - 1);
    }
  };

  return (
    <div className={classes.root}>
      <CommandInput
        focused={focused}
        setFocused={setFocused}
        command={command}
        setCommand={setCommand}
        getPreviousCommand={getPreviousCommand}
        getFollowingCommand={getFollowingCommand}
        onSubmit={onSubmit}
      />
      <SubmitButton command={command} onSubmit={onSubmit} />
    </div>
  );
});

export default Inputs;
