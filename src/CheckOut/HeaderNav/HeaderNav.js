import React from 'react';
import './HeaderNav.css'

const HeaderNav = () => {
    return (
        <div className='headerMjr flex items-center justify-center h-screen gap-10'>
            <div className='grid grid-cols-2 underMjr'>
            <div className=' inline-flex items-center mainWidth'>
            <img className='' src='https://i.ibb.co/gymTzzj/rose-new-png-1.png' alt=''></img>
            <div className='ml-5'>
            <h1 className='mainHeading'>Rose Garden Preparatory School</h1>
            <p className='mainPera'>Semi English Medium School</p>
            </div>
            </div>
            <div className=' ml-28'>
                <div className='grid justify-items-end '>
                <div className='inline-flex items-center ml-24 mt-8'>
                <img className='' src='https://i.ibb.co/23C1X5Z/icon1.png' alt=''></img>
                <p className='ml-2 address'>rose_garden_school@gmail.com</p>
                </div>
                <div className='inline-flex items-center ml-24 mt-5'>
                <img className='' src='https://i.ibb.co/q7bBYH3/iconn2.png' alt=''></img>
                <p className='ml-2 address'>rose_garden_school@gmail.com</p>
                </div>
                <div className='inline-flex items-center ml-24 mt-5'>
                <img className='' src='https://i.ibb.co/WkXC7kH/icon3.png' alt=''></img>
                <p className='ml-2 address'>rose_garden_school@gmail.com</p>
                </div>
                
                    
                </div>
            </div>
            </div>
        
        </div>
    );
};

export default HeaderNav;