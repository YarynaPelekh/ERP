import Card from "./Card";

import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <Card type={props.type}>
      <p className={classes.mainMessage}>{props.mainMessage}</p>
      <p className={classes.secondaryMessage}>{props.secondaryMessage}</p>
      <button
        className={classes.button}
        onClick={() => {
          props.onClick();
        }}
      >
        {props.buttonTitle}
      </button>
    </Card>
  );
};

export default Message;
