import 'bootstrap/dist/css/bootstrap.min.css'
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { FaTasks } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineHub } from "react-icons/md";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";


const NavBar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100 rounded-2"
        style={{ width: "280px" }}
      >
        <div  className="d-flex align-items-center">
            <a href="/"   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"> 
              <MdOutlineHub size={20} className='me-2'></MdOutlineHub>
              <span className="fs-4">METRIC HUB</span>
            </a>
            <CiMenuBurger size={20}></CiMenuBurger>
        </div>
        
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <RxDashboard size={20} className='me-2'></RxDashboard>
              DashBoard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <SlCalender size={20} className='me-2'></SlCalender>
              Meetings
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FaTasks size={20} className='me-2'></FaTasks>
              Tasks
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <RiContactsBook3Line size={20} className='me-2'></RiContactsBook3Line>
              Contacts
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <PiProjectorScreenChartDuotone size={20} className='me-2'></PiProjectorScreenChartDuotone>
              Projects
            </a>
          </li>
        </ul>

        <ul className="nav nav-pills flex-column mt-auto">
            <li>
            <a href="about-us" className="nav-link text-white">
              <FaUsers size={20} className='me-2'></FaUsers>
              About Us
            </a>
          </li>
        </ul>

        <hr />

        
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="User avatar"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
