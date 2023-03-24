import classes from "./InputBigLabel.module.css"

const InputBigLabel= ({label, ...rest}) => {
  return(
    <div className={classes.InputLabel}>
      <label>
        <p>{label}</p>
        <input {...rest} />
      </label>
    </div>
  )
}

export default InputBigLabel