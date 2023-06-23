import React, { useEffect } from 'react';
import './Examinations.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Footer from '../../Shared/Footer';
import { Document, Page } from 'react-pdf';

const onlineClass = [
    {
        name: "Class - I"
    },
    {
        name: "Class - II"
    },
    {
        name: "Class - III"
    },
    {
        name: "Class - V"
    },
    {
        name: "Class - VI"
    },
    {
        name: "Class - VII"
    },
    {
        name: "Class - VIII"
    },
    {
        name: "Class - IX"
    },
    {
        name: "Class - X"
    },
]



const Examinations = () => {
    const itemsPerPage = 5; // number of items to display per page

    const [currentPage, setCurrentPage] = useState(1); // state variable for the current page

    const totalPages = Math.ceil(onlineClass.length / itemsPerPage); // calculate the total number of pages

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


    // pdf added
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addRoutine');
                const data = await response.json();
                setNotices(data);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };

        fetchNotices();
    }, []);
    console.log(notices);

    return (
        <div>
            <div className='ExaminationsAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxLibrary '>
                                <h1 className='textLibrary'>Examinations</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BoxBackground max-w-[1090px] mx-auto mt-10 p-5'>
                <h1 className='boxTxtOne'>Academics / Examinations</h1>
                <div className='imgTwo mt-5'>
                    <h1 className='txtTittle pt-24 pl-10'>RGPS <br />
                        Examinations</h1>
                </div>
                <p className='BoxPera pt-5'>At our primary school, examinations are an essential part of the learning process. We believe that assessments should be fair, age-appropriate, and supportive of student learning. Our primary school examinations are designed to measure student progress and provide valuable feedback to both students and teachers. We aim to create a positive environment where students feel confident and motivated to demonstrate their knowledge and skills. Our exams cover a range of subjects, including language arts, mathematics, and science, and are aligned with national curriculum standards. We encourage our students to prepare for exams diligently and offer support services such as study materials and revision sessions to help them succeed. Our primary school examinations are an important step in preparing our students for future academic challenges and success.</p>
                <img className='p-10 rounded-2xl' src='https://i.ibb.co/0JxRyHt/Rectangle-114.png' alt=''></img>

                <div>

                    <hr className=''></hr>


                    {
                        notices.reverse().slice(0, 1).map(notice =>
                            <div className='mainFormBorder'>
                                <h1 className='routineTxt text-center mt-10 mb-10'>Exam Routine (updated date : {notice.NewDate}  )</h1>
                                <div className='grid grid-cols-3 '>
                                    <div className=' p-5'>
                                        <h1 className=' noticeSubDataTwo mt-3 mb-3'>Class Name</h1>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classOne}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classTwo}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classThree}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classFour}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classFive}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classSix}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classSeven}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classEight}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classNine}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>Class: {notice.classTen}</h1></div>
                                    </div>
                                    <div className=' p-5'>
                                        <h1 className=' noticeSubDataTwo mt-3 mb-3'>Exam Name</h1>

                                        <div><h1 className='mt-5 noticeSubData'>{notice.OneExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.TwoExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.ThreeExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.FourExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.FiveExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.SixExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.SevenExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.EightExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.NineExam}</h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubData'>{notice.TenExam}</h1></div>
                                    </div>
                                    <div className=' p-5'>
                                        <h1 className=' noticeSubDataTwo mt-3 mb-3'>Download PDF</h1>

                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.One}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Two}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Three}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Four}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Five}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Six}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Seven}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Eight}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Nine}>View</a></h1></div>
                                        <hr className='mt-2'></hr>
                                        <div><h1 className='mt-5 noticeSubDataThree'><a  target="_blank" href={notice.Ten} >View</a></h1></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div>

                </div>
                <div>





                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Examinations;