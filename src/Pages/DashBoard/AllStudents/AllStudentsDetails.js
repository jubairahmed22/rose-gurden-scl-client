import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllStudentsDetails = () => {
    const allStudetns = useLoaderData();
    console.log(allStudetns);
    return (
        <div>
           
          <div>
                {
                    allStudetns.map(student =>
                        <div key={student.id}>
                            <div className='studentImg w-full mt-20'>
                                <img alt='' src={student.img} className='w-56 h-56 '></img>


                            </div>
                            <div className='mainSize  h-56 w-full'>
                                <div className='box h-56  '>
                                    <div className='grid grid-cols-2 gap-20 mt-10 '>
                                        <div className='h-56  '>
                                            <h1 className='font-bold text-lg'>Student Name :</h1>
                                            <h1 className='font-bold mt-5 text-lg'>Student ID :</h1>
                                            <h1 className='font-bold mt-5 text-lg'>Student Email :</h1>
                                            <h1 className='font-bold mt-5 text-lg'>Student Fathers Name :</h1>
                                            <h1 className='font-bold mt-5 text-lg'>Student Mothers Name :</h1>
                                            <h1 className='font-bold mt-5 text-lg'>Student Class Name :</h1>
                                            <h1 className='font-bold mt-5 text-lg'>Student Address Name :</h1>
                                            <h1 className='font-bold mt-5 text-lg'>Student Phone Name :</h1>
                                        </div>
                                        <div className='h-56'>
                                            <h1 className=' text-lg '>{student.firstName} {student.LastName}</h1>
                                            <h1 className=' text-lg mt-5'>{student.id}</h1>
                                            <h1 className=' text-lg mt-5'>{student.email}</h1>
                                            <h1 className=' text-lg mt-5'>{student.fathersName}</h1>
                                            <h1 className=' text-lg mt-5'>{student.mothersName}</h1>
                                            <h1 className=' text-lg mt-5'>{student.admission}</h1>
                                            <h1 className=' text-lg mt-5'>{student.address}</h1>
                                            <h1 className=' text-lg mt-5'>{student.phone}</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllStudentsDetails;