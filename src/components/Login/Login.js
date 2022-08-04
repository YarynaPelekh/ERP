import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";

import { emailDomain as emailDomain } from "../config/constants";

import classes from "./Login.module.css";
import classesButton from "../UI/Button.module.css";

const MAX_NUMBER_INCORRECT_ATTEMPTS = 3;

const LogIn = () => {
  const navigate = useNavigate();

  const [submitDisable, setSubmitDisable] = useState(true);

  const [inputsTouched, setInputsTouched] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [incorrectAttemptsNumber, setIncorrectAttemptsNumber] = useState();

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const emailChangeHandle = () => {
    setInputsTouched(true);
    setEmailValue(emailRef.current.value);
  };

  const passwordChangeHandle = () => {
    setInputsTouched(true);
    setPasswordValue(passwordRef.current.value);
  };

  const inputsValidate = useCallback(() => {
    const enteredEmail = emailRef.current.value.trim();
    const enteredPassword = passwordRef.current.value.trim();

    // setEmailIsValid(inputsTouched ? enteredEmail.endsWith(emailDomain) : true);
    // setPasswordIsValid(inputsTouched ? enteredPassword.length > 0 : true);
    return inputsTouched && enteredEmail.endsWith(emailDomain) && enteredPassword.length > 0;
  }, [emailRef, passwordRef, inputsTouched]);

  const submitHandler = () => {
    if (!inputsValidate()) {
      let incorrectAttemptsNumber = +localStorage.getItem("incorrectAttemptsNumber") || 0;
      localStorage.setItem("incorrectAttemptsNumber", ++incorrectAttemptsNumber);
    } else {
      localStorage.setItem("incorrectAttemptsNumber", 0);
    }
    setIncorrectAttemptsNumber(+localStorage.getItem("incorrectAttemptsNumber") || 0);

    console.log("Submit handler");
  };

  // useEffect(() => {
  //   console.log(incorrectAttemptsNumber);
  //   incorrectAttemptsNumber >= MAX_NUMBER_INCORRECT_ATTEMPTS && navigate("/block-user", { replace: true });
  // }, [incorrectAttemptsNumber]);

  useEffect(() => {
    setSubmitDisable(!inputsValidate());
  }, [emailValue, passwordValue, setSubmitDisable, inputsValidate]);

  console.log("render login form");

  return (
    <Card type="normal">
      <p className={classes.title}>Login</p>
      <div className={classes.inputsContainer}>
        <Input
          ref={emailRef}
          placeholder="Company Email"
          label="Email"
          isValid={emailIsValid && passwordIsValid}
          onChange={emailChangeHandle}
        />
        <Input
          ref={passwordRef}
          placeholder="Password"
          label="Password"
          isValid={emailIsValid && passwordIsValid}
          onChange={passwordChangeHandle}
        />
        {(!passwordIsValid || !emailIsValid) && <p className={classes.errorMessage}>Incorrect credentials</p>}
      </div>
      <div className={classes.buttonContainer}>
        <Button
          title="Forgot password?"
          className={`${classesButton.button} ${classesButton.secondaryButton}`}
          onClick={() => {
            console.log("Forgot password");
          }}
        />
        <Button
          title="Submit"
          className={`${classesButton.button} ${classesButton.mainButton} `}
          onClick={submitHandler}
          disabled={submitDisable}
        />
      </div>
      {incorrectAttemptsNumber > MAX_NUMBER_INCORRECT_ATTEMPTS && (
        <p className={classes.errorMessage}>You made tree wrong attempts</p>
      )}
    </Card>
  );
};

export default LogIn;
