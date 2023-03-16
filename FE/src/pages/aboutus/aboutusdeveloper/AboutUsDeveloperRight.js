import classes from "./AboutUsDeveloperRight.module.css";
import tmpgirl from '../../../assets/AboutUs/tmp_girl1.png'

const AboutUsDeveloperRight = (props) =>{
  return(
    <div className={classes.developerBox}>
      <div>
        <img src={tmpgirl} alt="팀원" />
      </div>
      <div className={classes.developer}>
        <p className={classes.developerName}>{props.name}</p>
        <p className={classes.developerRole}>{props.role}</p>
        <p className={classes.developertext}>{props.text}</p>
      </div>
    </div>
  )

}

export default AboutUsDeveloperRight;