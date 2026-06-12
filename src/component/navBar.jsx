import 'bootstrap/dist/css/bootstrap.min.css'
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { FaTasks } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineHub } from "react-icons/md";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100 rounded-2"
        style={{ width: "280px",maxHeight:'100vh' }}
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
            <NavLink to="/dashboard" style={({isActive})=>({
              background:isActive?'blue':'none'
            })} className='nav-link text-white'>
              <RxDashboard size={20} className='me-2'></RxDashboard>
              DashBoard
            </NavLink>
          </li>
          <li>
           <NavLink to="/meetings" className="nav-link text-white"
            style={({isActive})=>({
              background:isActive?'blue':'none'
            })}>
              <SlCalender size={20} className='me-2'></SlCalender>
              Meetings
            </NavLink>
          </li>
          <li>
            <NavLink to="/task" className="nav-link text-white"
            style={({isActive})=>({
              background:isActive?'blue':'none'
            })}>
              <FaTasks size={20} className='me-2'></FaTasks>
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className="nav-link text-white"
            style={({isActive})=>({
              background:isActive?'blue':'none'
            })}>
              <RiContactsBook3Line size={20} className='me-2'></RiContactsBook3Line>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="nav-link text-white"
            style={({isActive})=>({
              background:isActive?'blue':'none'
            })}>
              <PiProjectorScreenChartDuotone size={20} className='me-2'></PiProjectorScreenChartDuotone>
              Projects
            </NavLink>
          </li>
        </ul>

        <ul className="nav nav-pills flex-column mt-auto">
            <li>
            <NavLink to="/about" className="nav-link text-white"
            style={({isActive})=>({
              background:isActive?'blue':'none'
            })}>
              <FaUsers size={20} className='me-2'></FaUsers>
              About Us
            </NavLink>
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
