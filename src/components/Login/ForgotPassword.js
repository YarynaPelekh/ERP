import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Message from "../UI/Message";

import { emailDomain } from "../config/constants";

import classes from "./AuthForm.module.css";
import classesButton from "../UI/Button.module.css";

const ForgotPassword = () => {
  const emailRef = React.createRef();
  const navigate = useNavigate();

  const [renderConfirmation, setRenderConfirmation] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [submitDisable, setSubmitDisable] = useState(true);

  const emailChangeHandle = () => {
    setSubmitDisable(emailValue.trim().endsWith(emailDomain));
    setEmailValue(emailRef.current.value);
  };

  const ValidateEmail = () => {
    console.log(emailValue);
    return emailValue.endsWith(emailDomain);
  };

  const submitHandler = () => {
    console.log("send forgot-password email");
    //sent request to backend

    ValidateEmail() ? setRenderConfirmation(true) : setEmailIsValid(false);
  };

  const forgotPasswordElements = (
    <Card type="normal">
      <p className={classes.title}>Login</p>
      <div className={classes.inputsContainer}>
        <Input
          ref={emailRef}
          placeholder="Company Email"
          label="Email"
          isValid={emailIsValid}
          onChange={emailChangeHandle}
          passwordMode={false}
        />
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

  const confirmationElements = (
    <Message
      type="message"
      mainMessage="You successfully created password!"
      secondaryMessage="Welcome to abroad!"
      buttonTitle="OK, Got it!"
      onClick={() => {
        navigate("/");
      }}
    />
  );

  return <Fragment>{renderConfirmation ? confirmationElements : forgotPasswordElements};</Fragment>;
};

export default ForgotPassword;
