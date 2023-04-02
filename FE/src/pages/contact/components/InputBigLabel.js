import classes from "./InputBigLabel.module.css";

const InputBigLabel = ({ label, errorMessage, ...rest }) => {
  return (
    <label>
      <input {...rest} className={classes.input} />
    </label>
  );
};

export default InputBigLabel;
