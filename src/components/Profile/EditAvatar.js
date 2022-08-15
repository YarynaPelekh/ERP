import Modal from "../UI/Modal";
import CancelSaveButtons from "../UI/CancelSaveButtons";

import classes from "./EditAvatar.module.css";

const EditAvatar = (props) => {
  return (
    <Modal>
      <div className={classes.card}>
        <p className={classes.header}>Change photo</p>
        <img src={props.img} className={classes.avatar} />
        <CancelSaveButtons onClose={props.onClose} />
      </div>
    </Modal>
  );
};

export default EditAvatar;
