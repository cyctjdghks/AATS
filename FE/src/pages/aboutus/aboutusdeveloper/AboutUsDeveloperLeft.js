import classes from "./AboutUsDeveloperLeft.module.css";
import tmpgirl from '../../../assets/AboutUs/tmp_girl1.png'

const AboutUsDeveloperLeft = (props) =>{
  return(
    <div className={classes.developerBox}>
      <div className={classes.developer}>
        <p className={classes.developerName}>{props.name}</p>
        <p className={classes.developerRole}>{props.role}</p>
        <p className={classes.developertext}>{props.text}</p>
      </div>
      <div>
        <img src={tmpgirl} alt="팀원" />
      </div>
    </div>
  )

}

export default AboutUsDeveloperLeft;