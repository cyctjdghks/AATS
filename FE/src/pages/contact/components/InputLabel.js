import classes from "./InputLabel.module.css";

const InputLabel = ({ label, errorMessage, ...rest }) => {
  return <input {...rest} className={classes.input} />;
};

export default InputLabel;
