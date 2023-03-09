import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsPersonCircle,
  BsPersonLinesFill,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

import Resume from "../../Assets/Connor_Beleznay_Resume.pdf";

import {
  FaFire,
  FaPoo,
  FaInfo,
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaHome,
  FaMoon,
  FaSun,
  FaFileDownload,
  FaBriefcase,
  FaInfoCircle,
} from "react-icons/fa";
import { GrDocumentPdf, GrDocumentDownload } from "react-icons/gr";
import { FiInfo, FiBriefcase } from "react-icons/fi";
import { MdOutlineSimCardDownload } from "react-icons/md";

import useDarkMode from "../../hooks/useDarkMode";

export const SideBar = (props) => {
  return (
    <div
      className="fixed top-0 h-screen w-16 
                        flex flex-col z-40
                        bg-gray-100 text-gray-900  
                        dark:bg-gray-900 dark:text-white 

                        shadow-lg "
    >
      <SideBarIcon
        className="z-1"
        icon={<FaHome size="28" />}
        text={"Home 💡"}
        callBack={props.pshOnClick}
      />
      <Divider />
      <SideBarIcon
        icon={<FaInfoCircle size="28" />}
        text={"About Me 💡"}
        callBack={props.pshOnClick}
      />
      <SideBarIcon
        icon={<FaBriefcase size="24" />}
        text={"Work Experience 💡"}
        callBack={props.pshOnClick}
      />
      <SideBarIcon
        icon={<BsFillLightningFill size="26" />}
        text={"Projects 💡"}
        callBack={props.pshOnClick}
      />
      <SideBarIcon
        icon={<BsPersonLinesFill size="26" />}
        text={"Contact Info & Refrences 💡"}
        callBack={props.pshOnClick}
      />
      <Divider />
      {/*<SideBarIcon icon={<BsGearFill size="22" />} text={"Settings 💡"} callBack={props.pshOnClick} />*/}
      <a //this will save the file as "your_cv.pdf"
        // download="Connor_Beleznay_Resume.pdf"
        //put the path of your pdf file
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        //reactstrap classes. add green button
      >
        <SideBarIcon
          icon={<FaFileDownload size="22" />}
          text={"View Résumé 💡"}
          callBack={() => {
            console.log();
          }}
        />
      </a>
      {/* <SideBarIcon icon={ThemeIcon} /> */}
      <ThemeIcon theme={props.theme} setTheme={props.setTheme} text={"Theme"} />
    </div>
  );
};


const downloadResume = () => {};
const ThemeIcon = (props) => {
  // const [darkTheme, setDarkTheme] = useDarkMode();
  let darkTheme = props.theme;

  const handleMode = () => props.setTheme(!darkTheme);
  return (
    <div className="sidebar-icon group">
      <span className="sidebar-tooltip group-hover:scale-100">
        {"Theme 💡"}
      </span>
      <span onClick={handleMode}>
        {darkTheme ? <FaSun size="24" /> : <FaMoon size="24" />}
      </span>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡", callBack }) => {
  const handleClick = () => callBack(text);
  return (
    // Group is used to apply CSS to a child element when a parent element changes state.
    //however group does not work in apply so it must be stated here.

    <div onClick={handleClick} className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr dark:bg-gray-500" />;

export const sideBarWrapper = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <p>Drawer content</p>
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
