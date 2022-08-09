import classes from "./GeneralUserInfo.module.css";
import avatar from "../../asserts/helper/avatar.jpg";

const GeneralUserInfo = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.avatar}>
        <img src={avatar} alt="Avatar" className={classes.avatar} />
      </div>
      <div>
        <p>Name</p>
        <p>Anna</p>
        <p>Surname</p>
        <p>Doe</p> <p>Name</p>
        <p>Anna</p>
        <p>Surname</p>
        <p>Doe</p> <p>Name</p>
      </div>
      <div>
        <p>Anna</p>
        <p>Surname</p>
        <p>Doe</p> <p>Name</p>
        <p>Anna</p>
        <p>Surname</p>
        <p>Doe</p>
      </div>
    </div>
  );
};

export default GeneralUserInfo;
