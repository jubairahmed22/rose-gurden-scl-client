import React, { useEffect, useState } from 'react';
import './Notice.css'
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';

// const tableData = [
//     {
//         id: "1",
//         name: "Ramadan Class Routine 2023",
//         date: "18 Mar 2023"
//     },
//     {
//         id: "2",
//         name: "Eid Vacation",
//         date: "16 Apr 2023"
//     },
//     {
//         id: "3",
//         name: "May Day",
//         date: "28 May 2023"
//     },
//     {
//         id: "4",
//         name: "Independent Day",
//         date: "26th march 2023"
//     },
//     {
//         id: "5",
//         name: "Victory Day",
//         date: "16 December 2023"
//     },
// ]

const Notice = () => {

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
    return (
        <div>
            <div className='NoticeAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxNotice'>
                                <h1 className='AdmissionLibrary pl-5 pt-1'>Notice</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1090px] mx-auto noticeBoxTwo mt-10 p-5'>
                <h1 className='noticeTxt'>Notice Board</h1>
                <hr className='lineTwo mt-5'></hr>
                <div className="overflow-x-auto mt-5">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='tableHeading'></th>
                                <th className='tableHeading'>Title</th>
                                <th className='tableHeading'>Date</th>
                                <th className='tableHeading'>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {notice.reverse().map((data, index) => (
                                <tr key={index}>
                                    <th className='tableData '>{index + 1}</th>
                                    <td className='tableData'>{data.name}</td>
                                    <td className='tableData'>{data.date}</td>
                                    <Link to={`/noticeDetails/${data.id}`}>
                                        <td className='tableData w-full  inline-flex items-center'>
                                            View
                                            <AiOutlineLink className='pl-1'></AiOutlineLink>
                                        </td>
                                    </Link>
                                </tr>
                            ))}



                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Notice; 