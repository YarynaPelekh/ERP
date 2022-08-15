import classes from "./CancelSaveButtons.module.css";

const CancelSaveButtons = (props) => {
  const saveButtonHandler = () => {
    console.log("saveButtonHandler");
    props.onClose();
  };

  return (
    <div className={classes.buttonContainer}>
      <button className={classes.button} onClick={props.onClose}>
        Cancel
      </button>
      <button className={classes.button} onClick={saveButtonHandler}>
        Save
      </button>
    </div>
  );
};

export default CancelSaveButtons;
