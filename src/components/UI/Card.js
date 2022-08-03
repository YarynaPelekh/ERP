import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${props.type === "normal" ? classes.cardNormal : classes.cardWarning} ${classes.center}`}>
      {props.children}
    </div>
  );
};

export default Card;
