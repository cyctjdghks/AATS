import Sidebar from "../../components/sidebar/SideBar";
import ContactMain from '../../pages/contact/contactmain/ContactMain';
import classes from "./Contact.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Contact = () => {
  return (
    <div className={classes.pagebox}>
      <Sidebar
        pagename = "My Page"
        subname1 = {{
          name: "My Info",
          icon: <AccountCircleIcon/>
        }}
        subname2 = {{
          name: "Calender",
          icon: <EventAvailableIcon/>
        }}
        subname3 = {{
          name: "Contact",
          icon: <HeadsetMicIcon/>
        }}
      />
      <ContactMain/>
    </div>
  );
};

export default Contact;
