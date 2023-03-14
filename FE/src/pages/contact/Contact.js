import Sidebar from "../../components/sidebar/Sidebar";
import ContactMain from '../../pages/contact/contactmain/ContactMain';
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.pagebox}>
      <Sidebar
        pagename = "My Page"
        subname1 = "My Info"
        subname2 = "Calender"
        subname3 = "Contact"
      />
      <ContactMain/>
    </div>
  );
};

export default Contact;
