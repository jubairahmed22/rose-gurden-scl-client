
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Navbar.css';
import { BsThreeDotsVertical } from 'react-icons/bs';


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = () => {
    logout()
      .then(() => { })
    navigate(`/login`)
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
    <li className='lg:ml-2'><Link to="/blog">Blog</Link></li>
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
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
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
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-ghost m-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 text-white stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-28">
                  <Link to='/dashboardLayout'><button
                    type="button"
                    class="inline-block rounded bg-info px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Dashboard
                  </button></Link>

                  <Link>
                    <button onClick={handleLogOut}
                      type="button"
                      class="inline-block mt-2 rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      SignOut
                    </button>
                  </Link>
                </ul>
              </div>


            </>
            :
            <Link to="/login">
              <button onClick={handleLogOut}
                type="button"
                class="inline-block  rounded  bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                LogIn
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;