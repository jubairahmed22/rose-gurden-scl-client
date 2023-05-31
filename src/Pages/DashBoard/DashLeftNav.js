import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css'

const DashLeftNav = () => {
    return (
        <div className=' '>
    <Link to='/dashboardLayout/userProfile'><button className='buttons w-full'>UserInfo</button></Link>
    <Link className='w-full' to="/dashboardLayout/addRoutine"><button className='buttons w-full  mt-2'>Add Routine</button></Link>
  {/* <div className="btn-group btn-group-vertical w-full">
  <Link className='w-full' to='/dashboardLayout/userProfile'><button className="btn w-full btn-active">User Info</button></Link>
  <Link className='w-full' to="/dashboardLayout/addRoutine"><button className="btn w-full">Add Routine</button></Link>
  <button className="btn">Add Notice</button>
  <button className="btn">Add Notice</button>
  <button className="btn">Add Notice</button> */}

            
        </div>
    );
};

export default DashLeftNav;