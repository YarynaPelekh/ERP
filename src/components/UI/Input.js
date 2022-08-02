import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const [isPasswordMode, setIsPasswordMode] = useState(false);

  const passwordModeClickHandle = () => {
    setIsPasswordMode((mode) => !mode);
  };

  return (
    <div className={classes.inputGroup}>
      <input
        ref={ref}
        className={`${classes.input} ${!props.isValid ? classes.inputInvalid : ""}`}
        placeholder={props.placeholder}
        type={isPasswordMode ? "password" : "text"}
        onChange={props.onChange}
      />
      <label>{props.label}</label>
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
