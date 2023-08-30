import classes from "./Side.module.css"
import Button from "../UI/Button";

const Side = () => {
  return(
    <div className={classes.container}>
      <div className={classes['profile-img-box']}>
        <div className={classes['profile-img']}></div>
      </div>

      <div className={classes['profile-name-box']}>
        <Button>Login</Button>
        <Button>Sign in</Button>
      </div>
    </div>
  )
};

export default Side;