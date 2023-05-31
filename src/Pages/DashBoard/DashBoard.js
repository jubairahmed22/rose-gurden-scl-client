import React from 'react';
import './DashBoard.css';
import DashLeftNav from './DashLeftNav';
import { Outlet } from 'react-router-dom';
import Navbar from '../../CheckOut/Navbar';
import HeaderNav from '../../CheckOut/HeaderNav/HeaderNav';

const DashBoard = () => {
    return (
        <div>
            <div className=''>
                <HeaderNav></HeaderNav>
                <Navbar></Navbar>
                <div className='grid grid-cols-3 gap-4'>
                <div>
                <DashLeftNav className=""></DashLeftNav>
                </div>
                <div className="col-span-2">
                <Outlet></Outlet>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;