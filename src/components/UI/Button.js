import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${props.className} ${props.disabled && classes.mainButtonDisable}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default Button;
