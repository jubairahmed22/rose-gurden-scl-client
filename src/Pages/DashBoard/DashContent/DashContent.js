import React from 'react';
import './DashContent.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import useTeachers from '../../../Hook/useTeacher';
import UseAdmin from '../../../Hook/UseAdmin';
import useStudent from '../../../Hook/useStudent';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const DashContent = () => {
    const { user } = useContext(AuthContext);
    const [isTeacher] = useTeachers(user?.email)
    const [isAdmin] = UseAdmin(user?.email)
    const [isStudent] = useStudent(user?.email)

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/${user?.email}`;
            const res = await fetch(url);
            const data = await res.json();
            setBookings(data);
        };

        fetchData();
    }, [user?.email]);

    console.log(bookings);

    return (
        <div>
            <div>

             <h1>Welcome to Rose Garden School </h1>
{/* <div class="grid grid-cols-3 gap-4">
  <div className='bg-indigo-500 h-32'>01</div>
  <div className='bg-indigo-500 h-32'>02</div>
  <div className='bg-indigo-500 h-32'>03</div>
  <div className='col-span-2 bg-orange-500 h-32 '>04</div>
  <div className='bg-indigo-500 h-32'>05</div>
  <div className='bg-indigo-500 h-32'>06</div>
  <div className='col-span-2 bg-orange-500 h-32 '>07</div>
  <div className='bg-indigo-500 h-32'>01</div>
  <div className='bg-indigo-500 h-32'>02</div>
  <div className='bg-indigo-500 h-32'>03</div>
</div> */}
            </div>
               {/* <div className=' '>
            <Link to='/dashboardLayout/userProfile'><button className='buttons w-full'>UserInfo</button></Link>

            {
                isTeacher && <>
            <Link className='w-full' to="/dashboardLayout/addRoutine"><button className='buttons w-full  mt-2'>Add Routine</button></Link>
            <Link className='w-full' to="/dashboardLayout/addNotice"><button className='buttons w-full  mt-2'>Add Notice</button></Link>
            <Link className='w-full' to="/dashboardLayout/addTeacher"><button className='buttons w-full  mt-2'>Add Teacher</button></Link>
            <Link className='w-full' to="/dashboardLayout/allStudetns"><button className='buttons w-full  mt-2'>All Students</button></Link>
            <Link className='w-full' to="/dashboardLayout/AddAdmitCard"><button className='buttons w-full  mt-2'>Add Admit Card</button></Link>
            <Link className='w-full' to="/dashboardLayout/AddResult"><button className='buttons w-full  mt-2'>Add Result</button></Link>

                </>
            }
            {
                isAdmin && <>
            <Link className='w-full' to="/dashboardLayout/addRoutine"><button className='buttons w-full  mt-2'>Add Routine</button></Link>
            <Link className='w-full' to="/dashboardLayout/addNotice"><button className='buttons w-full  mt-2'>Add Notice</button></Link>
            <Link className='w-full' to="/dashboardLayout/AddBooks"><button className='buttons w-full  mt-2'>Add Books</button></Link>
            <Link className='w-full' to="/dashboardLayout/addTeacher"><button className='buttons w-full  mt-2'>Add Teacher</button></Link>
            <Link className='w-full' to="/dashboardLayout/allUsers"><button className='buttons w-full  mt-2'>All Users</button></Link>
            <Link className='w-full' to="/dashboardLayout/allStudetns"><button className='buttons w-full  mt-2'>All Students</button></Link>
            <Link className='w-full' to="/dashboardLayout/allUsers"><button className='buttons w-full  mt-2'>All Users</button></Link>

            <Link className='w-full' to="/dashboardLayout/DeleteData"><button className='buttons w-full  mt-2'>Delete Data</button></Link>
                </>
            }
            {
                isStudent && <>
                <Link className='w-full' to="/dashboardLayout/StudentProfile"><button className='buttons w-full  mt-2'>My Profile</button></Link>
                <Link className='w-full'  to={`/dashboardLayout/AdmitCard/${bookings.id}`} ><button className='buttons w-full  mt-2'>Admit Card</button></Link>
                <Link className='w-full'  to={`/dashboardLayout/examResult/${bookings.id}`} ><button className='buttons w-full  mt-2'>Exam Result</button></Link>
            
                </>
            }
            
         


        </div> */}
        </div>
    );
};

export default DashContent;