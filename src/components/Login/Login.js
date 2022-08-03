import React, { useState, useEffect } from "react";
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

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [incorrectAttemptsNumber, setIncorrectAttemptsNumber] = useState();

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const inputsValidate = () => {
    const enteredEmail = emailRef.current.value.trim();
    const enteredPassword = passwordRef.current.value.trim();

    setEmailIsValid(enteredEmail.endsWith(emailDomain));
    setPasswordIsValid(enteredPassword.length > 0);
    return enteredEmail.endsWith(emailDomain) && enteredPassword.length > 0;
  };

  const submitHandler = () => {
    if (!inputsValidate()) {
      let incorrectAttemptsNumber = +localStorage.getItem("incorrectAttemptsNumber") || 0;
      localStorage.setItem("incorrectAttemptsNumber", ++incorrectAttemptsNumber);
    } else {
      localStorage.setItem("incorrectAttemptsNumber", 0);
    }
    setIncorrectAttemptsNumber(+localStorage.getItem("incorrectAttemptsNumber") || 0);
  };

  useEffect(() => {
    console.log(incorrectAttemptsNumber);
    incorrectAttemptsNumber >= MAX_NUMBER_INCORRECT_ATTEMPTS && navigate("/block-user", { replace: true });
  }, [incorrectAttemptsNumber]);

  return (
    <Card type="normal">
      <p className={classes.title}>Login</p>
      <div className={classes.inputsContainer}>
        <div className={classes.inputWithError}>
          <Input ref={emailRef} placeholder="Company Email" label="Email" isValid={emailIsValid && passwordIsValid} />
          {/* {!emailIsValid && <p className={classes.errorMessage}>Incorrect email</p>} */}
        </div>
        <div className={classes.inputWithError}>
          <Input ref={passwordRef} placeholder="Password" label="Password" isValid={emailIsValid && passwordIsValid} />
          {/* {!passwordIsValid && <p className={classes.errorMessage}>Incorrect password</p>} */}
        </div>
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
          className={`${classesButton.button} ${classesButton.mainButton}`}
          onClick={submitHandler}
        />
      </div>
      {incorrectAttemptsNumber > MAX_NUMBER_INCORRECT_ATTEMPTS && (
        <p className={classes.errorMessage}>You made tree wrong attempts</p>
      )}
    </Card>
  );
};

export default LogIn;
