import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
    return <div className={classes.sidebar}>
        <h1>{props.pagename}</h1>
        <h3>{props.subname1}</h3>
        <h3>{props.subname2}</h3>
        <h3>{props.subname3}</h3>
    </div>
};

export default Sidebar;