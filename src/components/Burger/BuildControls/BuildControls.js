import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "salad" },
  { label: "Cheese", type: "salad" },
  { label: "Meat", type: "salad" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} />)}
  </div>
);

export default buildControls;
