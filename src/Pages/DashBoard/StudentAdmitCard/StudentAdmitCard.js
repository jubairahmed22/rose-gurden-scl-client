import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StudentAdmitCard = () => {
    const students = useLoaderData();
    console.log(students);
    return (
        <div>
            <div className='max-w-[1090px] mx-auto noticeBoxTwo = p-5'>
                <h1 className='noticeTxt'>Get Admit Card</h1>
                <hr className='lineTwo mt-5'></hr>
                <div className="overflow-x-auto mt-5">
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='tableHeadingDesh'></th>
                                <th className='tableHeadingDesh'>Date</th>
                                <th className='tableHeadingDesh'>Exam</th>
                                <th className='tableHeadingDesh'>Class</th>
                                <th className='tableHeadingDesh '>pdf</th>



                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {students.reverse().map((data, index) => (
                                <tr key={index}>
                                    <th className='tableDataDesh '>{index + 1}</th>
                                    <td className='tableDataDesh'>{data.date}</td>
                                    <td className='tableDataDesh'>{data.exam}</td>
                                    <td className='tableDataDesh'>{data.class}</td>
                                    <td className='tableDataDesh'><a target="_blank" href={data.pdf}>View</a></td>
                                </tr>
                            ))}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentAdmitCard;