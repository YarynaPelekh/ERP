import { useState, useRef } from "react";

import Modal from "../UI/Modal";
import CancelSaveButtons from "../UI/CancelSaveButtons";

import img from "../../asserts/icons/bell.svg";

import classes from "./AddExperience.module.css";

const AddExperience = (props) => {
  const [descriptionValue, setDescriptionValue] = useState("");
  const descriptionRef = useRef();

  return (
    <Modal>
      <form className={classes.card}>
        <div className={classes.inputsFlexContainer}>
          <p className={classes.header}>Add experience</p>
          <input className={classes.input} type="text" placeholder="Job Title" />
          <input className={classes.input} type="text" placeholder="Company" />
          <div className={classes.flexContainer}>
            <input
              type="date"
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
          <input className={classes.input} type="text" placeholder="Add technology" />
          <textarea
            ref={descriptionRef}
            className={classes.input + " " + classes.textarea}
            placeholder="Description"
            maxLength={200}
            onChange={() => {
              setDescriptionValue(descriptionRef.current.value);
            }}
          />
          <span className={classes.charactersLeft}>{descriptionValue.length + "/200"}</span>
        </div>
        <CancelSaveButtons onClose={props.onClose} />
      </form>
    </Modal>
  );
};

export default AddExperience;
