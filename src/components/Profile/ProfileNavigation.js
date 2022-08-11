import Button from "../UI/Button";

import classes from "./ProfileNavigation.module.css";

const ProfileNavigation = () => {
  return (
    <nav className={classes.navBar}>
      {/* <div className={classes.flexColumn}> */}
      <div className={classes.flexRow + " " + classes.gap50px}>
        <button
          className={classes.navBtn + " " + classes.menuBtn}
          onClick={() => {
            alert("MENU");
          }}
        ></button>
        <button
          className={classes.navBtn + " " + classes.bellBtn + " " + classes.push}
          onClick={() => {
            alert("BELL");
          }}
        ></button>
        <button
          className={classes.navBtn + " " + classes.logoutBtn}
          onClick={() => {
            alert("LOGOUT");
          }}
        ></button>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default ProfileNavigation;
