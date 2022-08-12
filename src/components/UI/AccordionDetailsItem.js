import classes from "./AccordionDetailsItem.module.css";

const AccordionDetailsItem = (props) => {
  return (
    <div className={classes.card}>
      <p className={classes.headerFirst}>{props.item.headerFirst}</p>
      {!!props.item.headerFirstUpdate?.length && (
        <p className={classes.headerFirst + " " + classes.headerFirstUpdate}>{" - " + props.item.headerFirstUpdate}</p>
      )}
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
      {!!props.item.headerFirstAdditional.length && (
        <p className={classes.headerFirst + " " + classes.displayBlock + " " + classes.margin6px}>
          {props.item.headerFirstAdditional}
        </p>
      )}
      {!!props.item.headerSecondary.length && (
        <p className={classes.headerSecondary + " " + classes.margin12px}>{props.item.headerSecondary}</p>
      )}
      {!!props.item.headerSecondaryAdditional.length && (
        <p className={classes.headerSecondary + " " + classes.margin12px}>{props.item.headerSecondaryAdditional}</p>
      )}
      {!!props.item.link?.length && (
        <a className={classes.displayBlock + " " + classes.margin12px}>{props.item.link}</a>
      )}{" "}
      {!!props.item.period.length && (
        <p className={classes.headerSecondary + " " + classes.margin12px}>{props.item.period}</p>
      )}
      {!!props.item.tags.length && (
        <div className={!!props.item.tags.length && classes.margin24px}>
          {props.item.tags.map((tag) => (
            <span key={Math.random()} className={classes.tagItem}>
              {tag}
            </span>
          ))}
        </div>
      )}
      {!!props.item.description.length && (
        <p className={classes.description + " " + (!!props.item.tags.length ? classes.margin12px : classes.margin24px)}>
          {props.item.description}
        </p>
      )}
      {!!props.item.photos?.length && (
        <div className={classes.photos + " " + classes.margin12px}>
          {props.item.photos.map((photo) => {
            return <img src={photo} alt="docs" className={classes.photo} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AccordionDetailsItem;
