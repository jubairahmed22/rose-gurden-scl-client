import React from 'react';
import './Contact.css'
import Footer from '../Shared/Footer';

const Contact = () => {
    return (
        <div>
            <div className='contactAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxContact'>
                                <h1 className='AdmissionLibrary pl-5 pt-1'>Contact</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1090px] mx-auto contactBox mt-10 p-5'>
                <h1 className='contactTxt'>Rose Garden Preparatory School</h1>
                <hr className='contactLine mt-5'></hr>
                <div className='mt-5 imgTwo'>
                    <h1 className='imgTxtpera pt-28 pl-10'>Welcome to
                        <br />
                        <span className='imgTxt'>RGSP!</span>
                        <br />
                        Semi English Medium School</h1>
                </div>
                <div className='grid grid-cols-3 place-items-center gap-2'>
                    <div className='inline-flex items-center'>
                        <img src='https://i.ibb.co/PhQkfV3/Group-245.png' alt=''></img>
                        <h1 className='ml-3'>rose_garden_school@gmail.com</h1>
                    </div>
                    <div className='inline-flex items-center'>
                        <img src='https://i.ibb.co/pW0YK3k/Group-2.png' alt=''></img>
                        <h1 className='ml-3'>016 XXXX XXXX, 017 XXXX XXXX</h1>
                    </div>
                    <div className='inline-flex items-center mt-5'>
                        <img src='https://i.ibb.co/njW3gft/home-1-2.png' alt=''></img>
                        <h1 className='ml-3'>Uttara Block-D, House, 21 Road No. 20</h1>
                    </div>

                    
                </div>
                <h1 className='Contactlocations mb-5 mt-10'>Location</h1>    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4382006454016!2d90.38798457364992!3d23.874075278586183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c416ec497185%3A0x628e52943c152c40!2sZam%20Zam%20Tower!5e0!3m2!1sen!2sbd!4v1685350164758!5m2!1sen!2sbd" 
      width="1050"
       height="350" 
       style={{ border: "0" }} 
       allowfullscreen="" 
       loading="lazy"
        ></iframe>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;