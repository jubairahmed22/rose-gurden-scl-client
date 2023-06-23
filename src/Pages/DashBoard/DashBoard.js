import React from 'react';
import './DashBoard.css';
import DashLeftNav from './DashLeftNav';
import { Outlet } from 'react-router-dom';
import Navbar from '../../CheckOut/Navbar';
import HeaderNav from '../../CheckOut/HeaderNav/HeaderNav';
import DashContent from './DashContent/DashContent';

const DashBoard = () => {
    return (
        <div>
            <div className=''>
                <HeaderNav></HeaderNav>
                <Navbar></Navbar>
                <div className='flex'>
                <div>
                <DashLeftNav className=""></DashLeftNav>
                </div>
                <div className="w-full top-0">
                <Outlet></Outlet>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;