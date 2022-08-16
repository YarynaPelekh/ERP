import { Fragment, useState } from "react";

import InfoItemBlock from "../UI/InfoItemBlock";

import classes from "./GeneralUserInfo.module.css";
import avatar from "../../asserts/helper/avatar.jpg";
import editPen from "../../asserts/icons/edit-pen-white.svg";
import EditAvatar from "./EditAvatar";

const GeneralUserInfo = () => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const fileSelectHandler = (event) => {
    setShowAvatarModal(true);
    setSelectedImg(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Fragment>
      <div className={classes.mainContainer + " " + classes.flexContainer}>
        <div className={classes.avatar}>
          <img src={avatar} alt="Avatar" className={classes.avatar} />

          <button
            className={classes.editButton}
            onClick={() => {
              document.getElementById("fileInput").click();
            }}
          >
            <span className={classes.buttonLabel}>Edit</span>
            <img src={editPen} className={classes.editPenIcon} />
          </button>
          <input id="fileInput" type="file" onChange={fileSelectHandler} hidden></input>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.infoColumn}>
            <InfoItemBlock label="Name" value="Anna Anna Anna Anna Anna Anna Anna Anna Anna Anna Anna " />
            <InfoItemBlock label="Surname" value="Doe" />
            <InfoItemBlock label="Date of birth" value="12 december 1991" editable={true} />
          </div>
          <div className={classes.infoColumn}>
            <InfoItemBlock label="Email" value="annaannaannaannaanna.doe@henronsoft.com" />
            <InfoItemBlock label="Phone number" value="+38-098-765-43-21" editable={true} />
          </div>
        </div>
      </div>
      {showAvatarModal && <EditAvatar img={selectedImg} onClose={() => setShowAvatarModal(false)} />}
    </Fragment>
  );
};

export default GeneralUserInfo;
