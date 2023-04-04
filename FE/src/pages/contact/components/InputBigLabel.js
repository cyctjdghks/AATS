import classes from "./InputBigLabel.module.css";

const InputBigLabel = ({ label, errorMessage, ...rest }) => {
  return <input {...rest} className={classes.input} />;
};

export default InputBigLabel;
