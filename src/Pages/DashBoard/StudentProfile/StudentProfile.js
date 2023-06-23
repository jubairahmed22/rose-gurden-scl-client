import React, { useContext, useEffect, useState } from 'react';
import './StudentProfile.css'
import { AuthContext } from '../../../contexts/AuthProvider';
import useStudent from '../../../Hook/useStudentEmail';
import { useLoaderData } from 'react-router-dom';

const StudentProfile = () => {
    const students = useLoaderData();
    console.log(students);


    const { user } = useContext(AuthContext);


    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:8000/admissions/positive?email=${user?.email}`;
            const res = await fetch(url);
            const data = await res.json();
            setBookings(data);
        };

        fetchData();
    }, [user?.email]);




    return (
        <div>
            <div className='mainMjr h-full '>

                <div className='bg-base-200 p-10 rounded mt-20 shadow-xl mb-10'>
                    <div className='content'>
                        <div className='mainImg'>
                            {
                                students.map(student =>
                                    <div className="w-32 h-32 rounded">
                                    <img src={student.img} alt=''></img>
                                </div>    
                                )
                            }

                        </div>
                        <div className='grid grid-cols-2 gap-5 place-items-center'>
                            <div>
                                <h1 className='text-2xl  mt-5 font-bold'>Admission Date :</h1>
                                <h1 className='text-2xl  mt-5 font-bold'>Name :</h1>
                                <h1 className='text-2xl  mt-5 font-bold'>Fathers Name :</h1>
                                <h1 className='text-2xl  mt-5 font-bold'>Mothers Name :</h1>
                                <h1 className='text-2xl  mt-5 font-bold'>Class :</h1>
                                <h1 className='text-2xl  mt-5 font-bold'>Phone :</h1>
                                <h1 className='text-2xl  mt-5 font-bold'>Email :</h1>
                                <h1 className='text-2xl  mt-5 font-bold'>Address :</h1>

                            </div>
                            <div>
                                {
                                    students.map(student =>
                                        <div>
                                            <h1 className='text-2xl mt-5'>{student.NewDate}</h1>
                                            <h1 className='text-2xl mt-5'>{student.firstName} {student.LastName}</h1>
                                            <h1 className='text-2xl mt-5'>{student.fathersName}</h1>
                                            <h1 className='text-2xl mt-5'>{student.mothersName}</h1>
                                            <h1 className='text-2xl mt-5'>{student.admission}</h1>
                                            <h1 className='text-2xl mt-5'>{student.phone}</h1>
                                            <h1 className='text-2xl mt-5'>{student.email}</h1>
                                            <h1 className='text-2xl mt-5'>{student.address}</h1>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;