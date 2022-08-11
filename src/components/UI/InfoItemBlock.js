import { useState, useRef } from "react";

import classes from "./InfoItemBlock.module.css";

const InfoItemBlock = (props) => {
  const inputRef = useRef();

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.value);

  const onChangeHandler = () => {
    setInputValue(inputRef.current.value);
  };

  const onKeyDownHandle = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27) {
      document.activeElement.blur();
    }
  };

  return (
    <div>
      <label htmlFor="input" className={classes.label}>
        {props.label}
      </label>
      <div className={classes.alignInputButton}>
        <input
          id={props.value}
          name={props.value}
          type="text"
          ref={inputRef}
          value={inputValue}
          className={classes.input}
          disabled={!props.editable}
          contentEditable={!props.editable}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandle}
        />

        {props.editable && (
          <button
            className={classes.infoBtn + " " + classes.editBtn}
            onClick={() => {
              // alert("EDIT ");
              console.log(document.getElementsByName(props.value));
              // document.getElementsByName(props.value);
              inputRef.current.focus();
            }}
          />
        )}
      </div>
    </div>
  );
};

InfoItemBlock.defaultProps = {
  editable: false,
};

export default InfoItemBlock;
