import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import styles from "./styles";

export const CustomTooltip = withStyles(styles)((props) => {
  return <Tooltip arrow {...props} />;
});

export default CustomTooltip;
