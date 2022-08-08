import React, { useState } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

import { emailDomain } from "../config/constants";

import classes from "./Login.module.css";
import classesButton from "../UI/Button.module.css";

const ForgotPassword = () => {
  const emailRef = React.createRef();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [submitDisable, setSubmitDisable] = useState(true);
  // const [inputsTouched, setInputsTouched] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const emailChangeHandle = () => {
    // setInputsTouched(true);
    setSubmitDisable(emailValue.trim().endsWith(emailDomain));
    setEmailValue(emailRef.current.value);
  };

  const submitHandler = () => {
    console.log("send forgot-password email");
  };

  return (
    <Card type="normal">
      <p className={classes.title}>Login</p>
      <div className={classes.inputsContainer}>
        <Input
          ref={emailRef}
          placeholder="Company Email"
          label="Email"
          isValid={emailIsValid}
          onChange={emailChangeHandle}
        />
        {/* {(!passwordIsValid || !emailIsValid) && <p className={classes.errorMessage}>Incorrect credentials</p>} */}
      </div>
      <div className={classes.buttonContainer}>
        <Button
          title="Submit"
          className={`${classesButton.button} ${classesButton.mainButton}  ${classesButton.fullWidthButton} `}
          onClick={submitHandler}
          disabled={submitDisable}
        />
      </div>
    </Card>
  );
};

export default ForgotPassword;
