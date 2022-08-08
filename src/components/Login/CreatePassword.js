import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../UI/Modal";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Message from "../UI/Message";

import classes from "./AuthForm.module.css";
import classesButton from "../UI/Button.module.css";

const CreatePassword = () => {
  const navigate = useNavigate();
  const [renderSuccesfulMessage, setRenderSuccesfulMessage] = useState(false);

  const passwordRef = React.createRef();
  const confirmPasswordRef = React.createRef();

  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [passwordValue, setPasswordValue] = useState();
  const [confirmPasswordValue, setConfirmPasswordValue] = useState();

  const [submitDisable, setSubmitDisable] = useState(true);

  const passwordChangeHandle = () => {
    setPasswordIsValid(true);
    setPasswordValue(passwordRef.current.value);
    setConfirmPasswordValue(confirmPasswordRef.current.value);
  };

  const submitHandler = () => {
    //should be validation on backend
    setPasswordIsValid(passwordValue === confirmPasswordValue && passwordValue?.trim().length > 0);
    setRenderSuccesfulMessage(passwordValue === confirmPasswordValue && passwordValue?.trim().length > 0);
  };

  useEffect(() => {
    // console.log(passwordValue, confirmPasswordValue);
    setSubmitDisable(!(passwordValue?.trim().length > 0 && confirmPasswordValue?.trim().length > 0));
  }, [passwordValue, confirmPasswordValue]);

  const createPasswordElements = (
    <Card type="normal">
      <p className={classes.title}>Please, enter new password</p>
      <div className={classes.inputsContainer}>
        <Input
          ref={passwordRef}
          placeholder="Password"
          label="Password"
          isValid={passwordIsValid}
          onChange={passwordChangeHandle}
          passwordMode={true}
        />
        <Input
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
          label="Confirm Password"
          isValid={passwordIsValid}
          onChange={passwordChangeHandle}
          passwordMode={true}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          title="Submit"
          className={`${classesButton.button} ${classesButton.mainButton}  ${classesButton.fullWidthButton}`}
          onClick={submitHandler}
          disabled={submitDisable}
        />
      </div>
      {!passwordIsValid ? (
        <p className={classes.errorMessage}>Password doesn’t match</p>
      ) : (
        <p className={classes.errorMessage}></p>
      )}
      <div className={classes.info}>
        <p className={classes.infoHeader}>You password should include:</p>
        <p className={classes.infoText}>Min length 8 symbols.</p>
        <p className={classes.infoText}>Include min 1 upper case characters.</p>
        <p className={classes.infoText}>Include min 1 lower case characters.</p>
        <p className={classes.infoText}>Include min 1 digit characters.</p>
        <p className={classes.infoText}>Include min 1 special characters.</p>
      </div>
    </Card>
  );

  const passwordCreateSuccessElements = (
    <Message
      type="message"
      mainMessage="You successfully created password!"
      secondaryMessage="Welcome to abroad!"
      buttonTitle="OK, Got it!"
      onClick={() => {
        navigate("/main-page");
      }}
    />
  );

  return <Modal>{renderSuccesfulMessage ? passwordCreateSuccessElements : createPasswordElements}</Modal>;
};

export default CreatePassword;
