import React from 'react';
import './StudentSupport.css';
import Footer from '../../Shared/Footer';

const support = [
    {
        name: "Canteen",
        img: "https://i.ibb.co/8sjZVNH/Group-259.png"
    },
    {
        name: "Transport",
        img: "https://i.ibb.co/jTrvMyy/Rectangle-97.png"
    },
    {
        name: "Mentorship",
        img: "https://i.ibb.co/NZ0Mwtf/Rectangle-95.png"
    },
    {
        name: "Library",
        img: "https://i.ibb.co/QpwP1jq/Rectangle-105.png"
    },
    {
        name: "Club",
        img: "https://i.ibb.co/KKqzJ9H/Rectangle-103.png"
    },
    {
        name: "Common Room",
        img: "https://i.ibb.co/Zg7Lt0z/Rectangle-102.png"
    },
]

const StudentSupport = () => {
    return (
        <div>
             <div className='SupportAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxLibrary '>
                                <h1 className='textLibrary'>Student Support</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1090px] mx-auto h-56 supportBox mt-10 p-5'>
               <h1 className='supportHeading'>Academics / Student Support</h1>
               <p className='supportPera pt-5'>We are committed to providing comprehensive student support services to ensure that our students have the resources they need to succeed. Our student support team is dedicated to addressing the academic, social, emotional, and physical needs of our students. We offer a range of services, including counseling, tutoring, mentorship, and academic planning. Our goal is to provide a safe and inclusive environment where students can thrive and reach their full potential. If you need support, please do not hesitate to reach out to our student support team. We are here to help you succeed.</p>
               <div className=''>
                 <div className='grid grid-cols-3 gap-5 mt-10'>
                  {
                    support.map(sup =>
                        <div className='supportBoxTwo'>
                            <img src={sup.img} alt=''></img>
                            <h1 className='text-center boxTwoTxt pt-5'>{sup.name}</h1>
                        </div>
                    )
                  }
                 </div>
               </div> 
            </div>
           <Footer></Footer>
        </div>
    );
};

export default StudentSupport;