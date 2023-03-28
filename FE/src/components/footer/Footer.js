// import css style
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <p className={classes.left1}>AIVE</p>
        <p className={classes.left2}>
          2023 삼성 청년 SW 아카데미 | D102조 | AATS
        </p>
      </div>
      <div className={classes.right}>
        <p className={classes.right1}>About Us&emsp;Contact&emsp;Solutions</p>
      </div>
    </div>
  );
};

export default Footer;
