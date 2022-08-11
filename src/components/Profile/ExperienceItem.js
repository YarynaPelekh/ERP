import { Fragment } from "react";
import classes from "./ExperienceItem.module.css";

const ExperienceItem = (props) => {
  return (
    <div className={classes.card}>
      <p className={classes.headerFirst}>{props.item.jobTitle + " at " + props.item.company}</p>
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
      <p className={classes.headerSecond}>{props.item.dateFrom + " - " + props.item.dateTo}</p>
      {!!props.item.technology.length && (
        <Fragment>
          <span className={classes.technologyItem}>{props.item.technology}</span>
          <span className={classes.technologyItem}>{props.item.technology}</span>
        </Fragment>
      )}
      <p className={classes.description}>{props.item.description}</p>
    </div>
  );
};

export default ExperienceItem;
