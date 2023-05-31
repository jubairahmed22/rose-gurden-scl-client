
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Navbar.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch(err => console.log(err));
  }

  const menuItems = <React.Fragment>
    <li ><Link to="/">Home</Link></li>
    <li className='lg:ml-2' tabIndex={0}>
      <a className="justify-between">
        Academics
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      </a>
      <ul className="p-2 navBack">
        <li><Link to='/examinations'>Examinations</Link></li>
        <li><Link to='/library'>Library</Link></li>
        <li><Link to='/studentSupport'>Student Support</Link></li>
        <li><Link to='/teachers'>Teachers</Link></li>

      </ul>
    </li>
    <li className='lg:ml-2'><Link to="/admission">Admissions</Link></li>
    <li className='lg:ml-2'><Link to="/notice">Notice</Link></li>
    <li className='lg:ml-2'><Link to="/about">Blog</Link></li>
    <li className='lg:ml-2'><Link to="/gallery">Gallery</Link></li>
    <li className='lg:ml-2'><Link to="/contact">Contact</Link></li>
    <li className='lg:ml-2'><Link to="/about">About Us</Link></li>

  </React.Fragment>

  return (
    <div>
      <div className="navbar navBack">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal w-full px-5">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ?
            <>

              <button className="btn bg-indigo-900 ml-2" ><Link to='/dashboardLayout'>DashBoard</Link></button>

              <button className="btn bg-indigo-900 ml-2" onClick={handleLogOut}>Sign out</button>
            </>
            :
            <button className="btn btn-primary"><Link to="/login">Login</Link></button>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;