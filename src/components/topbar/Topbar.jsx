import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              genius.
            </a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+437 996 8654 </span>
            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>nhatkhoa2811@gmail.com</span>
            </div>
            <div className="itemContainer">
              <LinkedInIcon className="icon"/>
              <span><a href="https://www.linkedin.com/in/andy-khoa-ho-21439b152/">Andy Khoa Ho</a></span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  );
}
