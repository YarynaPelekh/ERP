import InfoItemBlock from "../UI/InfoItemBlock";

import classes from "./GeneralUserInfo.module.css";
import avatar from "../../asserts/helper/avatar.jpg";

const GeneralUserInfo = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.avatar}>
        <img src={avatar} alt="Avatar" className={classes.avatar} />
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
  );
};

export default GeneralUserInfo;
