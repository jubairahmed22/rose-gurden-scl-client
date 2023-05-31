import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className='mt-10 footerBackground'>
        <div className='max-w-[1090px] mx-auto'>
         <div className='inline-flex items-center mt-10'>
          <img src='https://i.ibb.co/gymTzzj/rose-new-png-1.png' alt=''></img>
          <div className='ml-5'>
            <h1 className='logoTxt'>Rose Garden Preparatory School</h1>
            <p className='logoPera'>Semi English Medium School</p>
          </div>
         </div>
         {/* main part */}
         <div className='grid grid-cols-3 gap-5 mt-5'>
             <div className=' col-span-2 h-56'>
              <h1 className='mt-5 footerTlt'>Address</h1>
              <p className='mt-2 footerPera'>Uttara Block-D, House, 21 Road No. 20, Dhaka 1216</p>
              <h1 className='mt-5 footerTlt'>Phone</h1>
              <p className='mt-2 footerPera'>016 XXXX XXXX, 017 XXXX XXXX</p>
              <h1 className='mt-5 footerTlt'>Email</h1>
              <p className='mt-2 footerPera'>rose_garden_school@gmail.com</p>
             </div>
             <div className=' h-56'>
              <h1 className='footerTlt mt-5'>Important Links</h1>
              <Link to="/admission"><h2 className='mt-4 footerPera'>Admission</h2></Link>
              <Link to="/notice"><h2 className='mt-4 footerPera'>Notice</h2></Link>
              {/* <Link to=""><h2 className='mt-4 footerPera'>Results</h2></Link>
              <Link to=""><h2 className='mt-4 footerPera'>National Curriculum and Textbook Board</h2>
               </Link> */}
              </div>
         </div>
         <h1 className='text-center footerPera mt-10'>Copyright © 2023 RGPS. All Rights Reserved</h1>
        </div>
        </div>
    </div>
  );
};

export default Footer;  