import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

import styles from "./styles";

export const SubmitButton = withStyles(styles)((props) => {
  const { classes, command, onSubmit } = props;

  return (
    <Button
      classes={{ root: classes.root }}
      disabled={!command}
      onClick={onSubmit}
    >
      <KeyboardReturnIcon />
    </Button>
  );
});

export default SubmitButton;
