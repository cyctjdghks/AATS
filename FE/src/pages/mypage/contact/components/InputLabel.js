const InputLabel = ({label, errorMessage, ...rest}) => {
  return(
      <label>
        <p>{label}</p>
        <input {...rest}/>
      </label>
  )
}

export default InputLabel