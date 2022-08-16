import { useState } from "react";

import classes from "./AccordionItem.module.css";

const AccordionItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.card}>
      <div className={classes.accordionHeader + " " + (isOpen && classes.accordionHeaderIncreasedPadding)}>
        <span className={classes.title}>{props.title}</span>
        <div className={classes.btnContainer}>
          <button
            className={classes.accordionBtn + " " + classes.arrowDownBtn + " " + (isOpen && classes.rotate)}
            onClick={() => {
              setIsOpen((open) => !open);
            }}
          ></button>
          <button
            className={classes.accordionBtn + " " + classes.plusBtn}
            onClick={() => {
              props.onAdd();
            }}
          ></button>
        </div>
      </div>

      {isOpen && <div className={classes.detailsCard}>{props.children}</div>}
    </div>
  );
};

export default AccordionItem;
