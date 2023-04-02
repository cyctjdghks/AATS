import classes from "./InputLabel.module.css";

const InputLabel = ({ label, errorMessage, ...rest }) => {
  return (
    <label>
      <input {...rest} className={classes.input} />
    </label>
  );
};

export default InputLabel;
