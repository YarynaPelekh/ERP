import React, { useState, useEffect } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";

import { emailDomain as emailDomain } from "../config/constants";

import classes from "./Login.module.css";
import classesButton from "../UI/Button.module.css";

const LogIn = () => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [attemptsFinished, setAttemptsFinished] = useState(false);

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const submitHandler = () => {
    const enteredEmail = emailRef.current.value.trim();
    const enteredPassword = passwordRef.current.value.trim();

    setEmailIsValid(enteredEmail.endsWith(emailDomain));
    setPasswordIsValid(enteredPassword.length > 0);
  };

  useEffect(() => {
    console.log("emailIsValid", emailIsValid);
    console.log("passwordIsValid", passwordIsValid);
    if (!passwordIsValid || !emailIsValid) {
      let incorrectAttemptsNumber = +localStorage.getItem("incorrectAttemptsNumber") || 0;
      console.log(incorrectAttemptsNumber);
      localStorage.setItem("incorrectAttemptsNumber", ++incorrectAttemptsNumber);
      {
        incorrectAttemptsNumber >= 3 && setAttemptsFinished(true);
      }
    }

    if (passwordIsValid && emailIsValid) {
      localStorage.setItem("incorrectAttemptsNumber", 0);
    }
  }, [emailIsValid, passwordIsValid]);

  return (
    <Card>
      <p className={classes.title}>Login</p>
      <div className={classes.inputsContainer}>
        <div className={classes.inputWithError}>
          <Input
            ref={emailRef}
            placeholder="Company Email"
            label="Email"
            isValid={emailIsValid}
            onChange={() => setEmailIsValid(true)}
          />
          {!emailIsValid && <p className={classes.errorMessage}>Incorrect email</p>}
          {/* <p className={classes.errorMessage}>{!emailIsValid && "Incorrect email"}</p> */}
        </div>
        <div className={classes.inputWithError}>
          <Input
            ref={passwordRef}
            placeholder="Password"
            label="Password"
            isValid={passwordIsValid}
            onChange={() => setPasswordIsValid(true)}
          />
          {!passwordIsValid && <p className={classes.errorMessage}>Incorrect password</p>}
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button title="Forgot password?" className={`${classesButton.button} ${classesButton.secondaryButton}`} />
        <Button
          title="Submit"
          className={`${classesButton.button} ${classesButton.mainButton}`}
          onClick={submitHandler}
        />
      </div>
      {attemptsFinished && <p className={classes.errorMessage}>You made tree wrong attempts</p>}
    </Card>
  );
};

export default LogIn;
