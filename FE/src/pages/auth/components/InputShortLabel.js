import classes from "./InputShortLabel.module.css"

const InputShortLabel= ({label, errorMessage, ...rest}) => {
  return(
    <div className={classes.InputLabel}>
      <label>
        <p>{label}</p>
        <input {...rest} className={classes.input}/>
      </label>
      <p className={(errorMessage ?  classes.ErrorMessage : classes.ErrorMessagehidden)} > {(errorMessage ?  errorMessage : "qqq")}</p>
    </div>
  )
}

export default InputShortLabel