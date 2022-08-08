import React from "react";
import axios from "axios";

import ReCAPTCHA from "react-google-recaptcha";

import Modal from "../UI/Modal";

import { SITE_KEY, url } from "../config/constants";

const CaptchaPopUp = (props) => {
  const recaptchaRef = React.createRef();

  const captchaChangeHandle = async () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    //Reset the reCAPTCHA component for subsequent checks
    recaptchaRef.current.reset();
    await axios
      .post(url + "post", { recaptchaValue })
      .then((res) => {
        console.log(res);
        props.onClose();
      })
      .catch((error) => {
        console.log("axios error, ", error);
        alert(`Can't verify your answer. Please, try again..\n${error.message}`);
      });
  };

  const modalElements = (
    <div>
      <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} onChange={captchaChangeHandle} />
    </div>
  );

  return <Modal onClose={props.onClose}>{modalElements}</Modal>;
};

export default CaptchaPopUp;
