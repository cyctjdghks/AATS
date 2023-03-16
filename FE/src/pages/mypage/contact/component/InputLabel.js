import classes from "./InputLabel.module.css"

const InputLabel = ({label, errorMessage, ...rest}) => {
  return(
    <div>
      <label>
        <p>{label}</p>
        <input {...rest}/>
      </label>
    </div>
  )
}

export default InputLabel