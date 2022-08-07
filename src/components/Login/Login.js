import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import CaptchaPopUp from "../UI/CaptchaPopUp";

import { emailDomain } from "../config/constants";

import classes from "./Login.module.css";
import classesButton from "../UI/Button.module.css";

const MAX_NUMBER_INCORRECT_ATTEMPTS = 33;

const LogIn = () => {
  const navigate = useNavigate();

  const [showPopUp, setShowPopUp] = useState();
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

    return inputsTouched && enteredEmail.endsWith(emailDomain) && enteredPassword.length > 0;
  }, [emailRef, passwordRef, inputsTouched]);

  const serverLogin = async () => {
    const loginValid = await axios
      // .get("http://localhost:2000/get", { passwordValue })
      .get("http://localhost:2000/get", { params: { password: passwordValue } })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("axios error, ", error);
        return false;
      });
    return loginValid;
  };

  const submitHandler = async () => {
    const validationOnServer = await serverLogin()
      .then((res) => res)
      .catch((error) => console.log(error));
    if (!validationOnServer) {
      let incorrectAttemptsNumber = +localStorage.getItem("incorrectAttemptsNumber") || 0;
      localStorage.setItem("incorrectAttemptsNumber", ++incorrectAttemptsNumber);

      setEmailIsValid(false);
      setPasswordIsValid(false);
    } else {
      console.log("correct attempt");
      localStorage.setItem("incorrectAttemptsNumber", 0);
      setEmailIsValid(true);
      setPasswordIsValid(true);
      //forward to the main page
      navigate("/main-page");
    }
    setIncorrectAttemptsNumber(+localStorage.getItem("incorrectAttemptsNumber") || 0);
  };

  useEffect(() => {
    if (incorrectAttemptsNumber >= MAX_NUMBER_INCORRECT_ATTEMPTS) {
      setShowPopUp(true);
    }
  }, [incorrectAttemptsNumber]);

  useEffect(() => {
    setSubmitDisable(!inputsValidate());
  }, [emailValue, passwordValue, setSubmitDisable, inputsValidate]);

  useEffect(() => {
    setIncorrectAttemptsNumber(+localStorage.getItem("incorrectAttemptsNumber") || 0);
  }, []);

  const modalOnCloseHandle = () => {
    setShowPopUp(false);
    //reset number of incorrect attempts
    localStorage.setItem("incorrectAttemptsNumber", 0);
    setIncorrectAttemptsNumber(+localStorage.getItem("incorrectAttemptsNumber") || 0);
  };

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
            navigate("/forgot-password");
          }}
        />
        <Button
          title="Submit"
          className={`${classesButton.button} ${classesButton.mainButton} `}
          onClick={submitHandler}
          disabled={submitDisable}
        />
      </div>
      <p className={classes.errorMessage}>{`You made ${incorrectAttemptsNumber} wrong attempts`}</p>

      {showPopUp && <CaptchaPopUp onClose={modalOnCloseHandle} />}
    </Card>
  );
};

export default LogIn;
