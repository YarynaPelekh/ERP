import Modal from "../UI/Modal";
import CancelSaveButtons from "../UI/CancelSaveButtons";

import classes from "./AddExperience.module.css";

const AddExperience = (props) => {
  return (
    <Modal>
      <div className={classes.card}>
        <p className={classes.header}>Add experience</p>
        <input className={classes.input} type="text" placeholder="Job Title" />
        <input className={classes.input} type="text" placeholder="Company" />
        <div className={classes.flexContainer}>
          <input
            type="text"
            placeholder="Start date"
            className={classes.input + " " + classes.inputDate}
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <input
            type="text"
            placeholder="End date"
            className={classes.input + " " + classes.inputDate}
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        <input className={classes.input} type="text" placeholder="Teacher" />
        <textarea className={classes.input + " " + classes.textarea} placeholder="Description" max={200} />

        <CancelSaveButtons onClose={props.onClose} />
      </div>
    </Modal>
  );
};

export default AddExperience;
