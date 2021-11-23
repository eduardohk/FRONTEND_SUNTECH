import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

export const Field = withStyles(styles)((props) => {
  const { classes, field, separator } = props;

  return (
    <div className={classes.root}>
      <div className={classes.field}>
        <div className={classes.name}>{`${field.position}. ${field.name}`}</div>
        <div className={classes.value}>{field.value}</div>
      </div>
      {separator && <div className={classes.separator}>;</div>}
    </div>
  );
});

export default Field;
