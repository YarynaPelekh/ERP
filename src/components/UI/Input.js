import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const [isPasswordMode, setIsPasswordMode] = useState(false);

  const passwordModeClickHandle = () => {
    setIsPasswordMode((mode) => !mode);
  };

  console.log("Rendering ", props.label, "isValid ", props.isValid);
  return (
    <div className={classes.inputGroup}>
      <input
        ref={ref}
        className={`${classes.input} ${!props.isValid ? classes.inputInvalid : ""}`}
        placeholder={props.placeholder}
        type={isPasswordMode ? "password" : "text"}
      />
      {props.isValid && <label>{props.label}</label>}
      <button
        className={
          !props.isValid
            ? classes.invalidIcon
            : `${classes.btnEye} ${isPasswordMode ? classes.eyeIcon : classes.crossedEyeIcon}`
        }
        onClick={passwordModeClickHandle}
      ></button>
    </div>
  );
});

export default Input;
