import classes from "./OuterContainer.module.css"

const OuterContainer = (props) => {
  return(
    <div className={classes['outer-container']}>
      {props.children}
    </div>
  )
};

export default OuterContainer;