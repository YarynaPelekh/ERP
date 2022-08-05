import React from "react";
import axios from "axios";

import ReCAPTCHA from "react-google-recaptcha";

import Modal from "../UI/Modal";

const SITE_KEY = "6LeMe0whAAAAAFZmJLnGIL3tRMaDA1iU8FFaePuL";
// const SITE_KEY_INVISIBLE = "6LcWh0whAAAAAF8kn6MjwDYRaGgbQREI3NQNZNUW";

const CaptchaPopUp = (props) => {
  const recaptchaRef = React.createRef();

  const captchaChangeHandle = async () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    //Reset the reCAPTCHA component for subsequent checks
    recaptchaRef.current.reset();
    await axios
      // .post(process.env.REACT_APP_API_URL, { recaptchaValue })
      .post("http://localhost:2000/post", { recaptchaValue })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log("axios error, ", error);
      })
      .finally(() => props.onClose());
  };

  const modalElements = (
    <div>
      <p>Modal Content</p>
      <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} onChange={captchaChangeHandle} />
      <button onClick={props.onClose}>Close</button>
    </div>
  );

  return <Modal onClose={props.onClose}>{modalElements}</Modal>;
};

export default CaptchaPopUp;
