import classes from "./InputLabel.module.css"

const InputLabel = ({label, errorMessage, ...rest}) => {
  return(
    <div>
      <label>
        <input {...rest} className={classes.input}/>
      </label>
    </div>
  )
}

export default InputLabel

