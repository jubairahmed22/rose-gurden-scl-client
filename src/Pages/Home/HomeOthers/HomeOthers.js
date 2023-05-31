import React, { useEffect, useState } from 'react';
import './HomeOthers.css'
import { Link } from 'react-router-dom';
import HomeCalander from './HomeCalander';
import Iframe from 'react-iframe';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';







const HomeOthers = () => {


    const [notice, setnotice] = useState([]);
    useEffect(() => {

        const url = 'notice.json';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setnotice(data);
            })
    }, [])
    
    const [news, setnews] = useState([]);
    useEffect(() => {

        const url = 'news.json';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setnews(data);
            })
    }, [])

    const itemsPerPage = 4; // number of items to display per page

    const [currentPage, setCurrentPage] = useState(1); // state variable for the current page

    const totalPages = Math.ceil(notice.length / itemsPerPage); // calculate the total number of pages

    // Function to handle next page click
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle previous page click
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div>
            {/* Welcome to rose Garden start */}
            <div className='welcomeBackground'>
                <div className='grid grid-cols-3 gap-4 max-w-[1090px] mx-auto'>
                    <div className='col-span-2'>
                        <div className='grid  mt-10'>
                            <div>
                                <h1 className='welcomeTxtOne'>Welcome To Rose Garden Preparatory School</h1>

                            </div>
                            <div>
                                <button className='welcomeButton mt-2'>Apply Now</button>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end  w-full h-full place-content-end ml-4'>
                        <h1 className='welcomeTxtTwo mt-10'>We assure you of the best possible care and education for your child.</h1>
                       
                    </div>
                </div>
            </div>
            {/* Welcome to rose Garden end */}

            {/* notice section start */}
            <div className='grid grid-cols-3 gap-5 max-w-[1090px] mx-auto  mt-10'>
                <div className='col-span-2 '>
                    <img className='noticeImg' src='https://i.ibb.co/xfMRR86/Rectangle-59.png' alt=''></img>
                </div>
                <div className=' justify-self-end noticeCeta p-5'>
                    <div>
                       <div className='inline-flex items-center'>
                      <div>
                      <h1 className='noticeHeading'>Important Notice</h1>
                      </div>
                        <div className='inline-flex items-center ml-2 noticeButton'>
                            <button onClick={previousPage}><AiOutlineLeft /></button>
                            <button onClick={nextPage} ><AiOutlineRight /></button>
                        </div>
                       </div>
                        <hr className='mt-2'></hr>
                        <div className=''>
                            {
                                notice.slice(startIndex, endIndex).map(not =>
                                    <Link to={`/noticeDetails/${not.id}`}><h1 className='noticeName pt-7'>{not.name}</h1>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* calender section end */}
            {/* calender section start */}
            <div className='grid grid-cols-3 gap-5 max-w-[1090px] mx-auto mt-10'>
                <div className='col-span-2 calenderBg'>
                    <div className='p-5'>
                        <span></span>
                        <h1 className='calenderTtl pb-10'>Academic Calender</h1>
                      
                        <HomeCalander></HomeCalander>
                    </div>
                </div>
                <div className='newsCeta justify-self-end p-5'>
                    <h1 className='calenderTtl pb-2'>News & Event</h1>
                    <hr className=''></hr>
                    <div className=''>
                        {
                            news.map(not =>
                                <Link><h1 className='noticeName pt-7'>{not.name}</h1>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* notice section end */}

            {/* message section start */}
            <div className='grid grid-cols-2 gap-10  max-w-[1090px] mx-auto mt-10'>
                <div className=' h-150 msgBg p-5'>
                    <h1 className='messageHeading'>Message From The Chairman</h1>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        <div>
                            <img className='w-32 h-32' src='https://i.ibb.co/Tw7FH4f/Rectangle-65.png' alt=''></img>
                        </div>
                        <div className='col-span-2 messageTxt'>Dear Parents, Students and Staff Members,<br /><br />

                            It is my pleasure to extend a warm welcome to all of you to our Play Group School. As the Chairman of this institution, I take great pride in the achievements of our students and the hard work put in by our dedicated...</div>
                    </div>
                </div>
                <div className=' h-150 msgBg p-5'>
                    <h1 className='messageHeading'>Message From The Principal</h1>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        <div>
                            <img className='w-32 h-32' src='https://i.ibb.co/NK87x22/Rectangle-66.png' alt=''></img>
                        </div>
                        <div className='col-span-2 messageTxt'>Dear Students, Parents, and Guardians,<br /><br />

                            I am honored to be the principal of Play Group School, and I welcome all of you to the new academic year. As the head of this institution, I believe that education is not just about achieving high grades but also about developing a ...</div>
                    </div>
                </div>
            </div>
            {/* message section end */}
            {/* image gallery start */}
            <div className='imgGalleryBg max-w-[1090px] mx-auto mt-10 p-5'>
                <h1 className='imgGrid mt-5'>Image Gallery</h1>
                <div className='mt-10 grid grid-cols-6 place-items-center gap-10'>
                 <div>
                    <img src='https://i.ibb.co/5BDGk95/Rectangle-69.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/z51mYyJ/Rectangle-70.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/5rgX3RS/Rectangle-71.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/VTX4FkK/Rectangle-72.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/FXPq8jX/Rectangle-73.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/18gs1P2/Rectangle-74.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/D7RVfdp/Rectangle-75.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/MfK99jJ/Rectangle-76.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/dksDj50/Rectangle-77.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/K7fZBbf/Rectangle-78.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/K7fZBbf/Rectangle-78.png' alt=''></img>
                 </div>
                 <div>
                    <img src='https://i.ibb.co/587hBJF/Rectangle-80.png' alt=''></img>
                 </div>
                 
                </div>
            </div>
            {/* image gallery end */}
         
            <div className='max-w-[1090px] mx-auto mt-10 mb-10 p-5 locationsBackground'>
             <h1 className='locations mt-3 mb-3'>Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4382006454016!2d90.38798457364992!3d23.874075278586183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c416ec497185%3A0x628e52943c152c40!2sZam%20Zam%20Tower!5e0!3m2!1sen!2sbd!4v1685350164758!5m2!1sen!2sbd" 
      width="1050"
       height="350" 
       style={{ border: "0" }} 
       allowfullscreen="" 
       loading="lazy"
        ></iframe>
            </div>
           
   
           
        </div>
    );
};

export default HomeOthers;