import React from "react";
import axios from "axios";

import ReCAPTCHA from "react-google-recaptcha";

import Modal from "../UI/Modal";

const SITE_KEY = "6LeMe0whAAAAAFZmJLnGIL3tRMaDA1iU8FFaePuL";

const CaptchaPopUp = (props) => {
  const recaptchaRef = React.createRef();

  const captchaChangeHandle = async () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    //Reset the reCAPTCHA component for subsequent checks
    recaptchaRef.current.reset();
    await axios
      // .post(process.env.REACT_APP_API_URL, { recaptchaValue })
      .post("http://localhost:2000/post", { recaptchaValue })
      .then((res) => {
        console.log(res);
        props.onClose();
      })
      .catch((error) => {
        console.log("axios error, ", error);
        alert("Can't verify your answer. Please, try again.");
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
