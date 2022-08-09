import GeneralUserInfo from "./GeneralUserInfo";
import ProfileNavigation from "./ProfileNavigation";

import classes from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.pageContainer + " " + classes.centerHorizontally}>
        <ProfileNavigation></ProfileNavigation>
        <GeneralUserInfo></GeneralUserInfo>
      </div>
    </div>
  );
};

export default ProfilePage;
