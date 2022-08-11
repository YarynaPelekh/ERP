import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  return (
    <div className={classes.card}>
      <span className={classes.headerFirst}>{props.item.name}</span>
      <div className={classes.btnContainer}>
        <button
          className={classes.experienceBtn + " " + classes.editBtn}
          onClick={() => {
            console.log("edit");
          }}
        ></button>
        <button
          className={classes.experienceBtn + " " + classes.deleteBtn}
          onClick={() => {
            console.log("delete");
          }}
        ></button>
      </div>
    </div>
  );
};

export default SkillItem;
