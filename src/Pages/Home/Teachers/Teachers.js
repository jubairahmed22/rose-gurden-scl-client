import React from 'react';
import './Teachers.css'
import Footer from '../../Shared/Footer';
import { useEffect } from 'react';
import { useState } from 'react';

// const teachers = [
//     {
//         name: "Mr. Rayan Rahman",
//         subName: "Sr. Teacher",
//         email: "Rayan@gmail.com",
//         img: "https://i.ibb.co/tQm6dLz/Rectangle-100.png"
//     },
//     {
//         name: "Mr. Sadik Rahman",
//         subName: "Sr. Teacher",
//         email: "Sadik@gmail.com",
//         img: "https://i.ibb.co/sv98bb5/Rectangle-100-1.png"
//     },
//     {
//         name: "Kabir Uddin",
//         subName: "math teacher",
//         email: "kabir@gmail.com",
//         img: "https://i.ibb.co/RT09h2y/Rectangle-100-2.png"
//     },
//     {
//         name: "Nayeem Ahmed",
//         subName: "English Teacher",
//         email: "nayeem@gmail.com",
//         img: "https://i.ibb.co/hK5b09x/Rectangle-100-3.png"
//     },
//     {
//         name: "Ifti Rahman",
//         subName: "Biology Teacher",
//         email: "ifti999@gmail.com",
//         img: "https://i.ibb.co/x6zXWSx/Rectangle-100-4.png"
//     },
//     {
//         name: "Solaiman Rahman",
//         subName: "Physics Teacher",
//         email: "solaiman945@gamil.com",
//         img: "https://i.ibb.co/tLr5Bd6/Rectangle-100-5.png"
//     },
//     {
//         name: "Shifat Rahman",
//         subName: "Chemistry Teacher",
//         email: "shifat@gmail.com",
//         img: "https://i.ibb.co/nkjNRkr/Rectangle-100-6.png"
//     },
//     {
//         name: "Taohidul Uthso",
//         subName: "ICT Teacher",
//         email: "uthso88@gmail.com",
//         img: "https://i.ibb.co/G2NjhYV/Rectangle-100-7.png"
//     },
//     {
//         name: "Jubair Ahmed",
//         subName: "h.Math Teacher",
//         email: "jubairahmed060@gmail.com",
//         img: "https://i.ibb.co/jb8QZV7/Rectangle-100-8.png"
//     }
// ]

const Teachers = () => {

    const [teachers, setTeachers] = useState([]);
    useEffect(() => {

        const url = 'https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addTeacher';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setTeachers(data);
            })
    }, [])
    
    return (
        <div>
            <div className='TeachersAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxLibrary '>
                                <h1 className='textLibrary'>Teachers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='teachersBox max-w-[1090px] mx-auto mt-10 p-5'>
               <h1 className='teacherTxt'>Our Teachers</h1>
               <p className='teacherPera pt-10'>RGPS’s teachers are some of the busiest educational professionals in the country! We are committed to excellence and work hard to deliver our best to our students. High standards are maintained through intensive and comprehensive training programs. Close monitoring and supervision is provided to help teachers implement modern teaching methods.</p>
             <div className='grid grid-cols-1 gap-5 mt-10'>
                {
                    teachers.reverse().map(teacher =>
                     <div className='flex mainTeacher'>
                        <img src={teacher.img} alt=''></img>
                        <div className='ml-10 techBox'>
                        <h1 className='pt-2 teacherName'>{teacher.firstName} {teacher.LastName}</h1>
                        <p  className='pt-2 teacherSubName'>Designation: {teacher.designation}</p>
                        <p  className='pt-2 teacherEmail'>Email: {teacher.email}</p>
                        <p  className='pt-2 teacherEmail'>Phone: {teacher.phone}</p>
                        </div>
                     </div>   
                    )
                }
             </div>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Teachers;