import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Field from "../Field";
import frameColors from "./frameColors";

import styles from "./styles";

export const Frame = withStyles(styles)((props) => {
  const { classes, frame } = props;

  return frame.code ? (
    <div className={classes.root} style={{ background: "red" }}>
      <div className={classes.information}>
        <div className={classes.group}>
          <div className={classes.title}>
            {frame.code === "COMMAND_FAILED"
              ? "Socket.io (Origem)"
              : "Socket UDP (Origem)"}
            :
          </div>
          <div className={classes.value}>
            {frame.code === "COMMAND_FAILED"
              ? "Plataforma"
              : `${frame.originAddress}:${frame.originPort}`}
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes.title}>ERRO:</div>
          <div className={classes.value}>{`${frame.code} - ${frame.err}`}</div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={classes.root}
      style={{ background: frameColors[frame.header] }}
    >
      <div className={classes.information}>
        <div className={classes.group}>
          <div className={classes.title}>Frame ID:</div>
          <div className={classes.value}>{`${frame.id}`}</div>
        </div>
        <div className={classes.group}>
          <div className={classes.title}>Socket UDP (Origem):</div>
          <div className={classes.value}>
            {`${frame.originAddress}:${frame.originPort}`}
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes.title}>ACK:</div>
          <div className={classes.value}>
            {frame.ack ? `${frame.ack}` : "DESNECESSÁRIO"}
          </div>
        </div>
      </div>
      <div className={classes.frame}>
        {frame.fields.map((field) => (
          <Field
            key={field.position}
            field={field}
            separator={field.position !== frame.fields.length}
          />
        ))}
      </div>
    </div>
  );
});

export default Frame;
