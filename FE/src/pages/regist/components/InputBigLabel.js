import classes from "./InputBigLabel.module.css"

const InputBigLabel= ({label, errorMessage, ...rest}) => {
  return(
    <div className={classes.InputLabel}>
      <label>
        <p>{label}</p>
        <input {...rest} />
      </label>
      <p className={(errorMessage ?  classes.ErrorMessage : classes.ErrorMessagehidden)} > {(errorMessage ?  errorMessage : "")}</p>
    </div>
  )
}

export default InputBigLabel