import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.inputGroup}>
      <input className={classes.input} placeholder={props.placeholder} />
      <label>{props.label}</label>
    </div>
  );
};

export default Input;
