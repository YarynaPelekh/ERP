import Card from "../UI/Card";
import Input from "../UI/Input";

import classes from "./Login.module.css";

const LogIn = () => {
  return (
    <Card>
      <p className={classes.title}>Login</p>
      <div className={classes.inputsContainer}>
        <Input placeholder="Company Email" label="Email" />
        <Input placeholder="Password" label="Email" />
        {/* <div className={classes.inputGroup}>
          <input className={classes.input} placeholder="Company Email" />
          <label>Email</label>
        </div> */}
        {/* <input className={classes.input} placeholder="Password" label="Password" /> */}
      </div>
    </Card>
  );
};

export default LogIn;
