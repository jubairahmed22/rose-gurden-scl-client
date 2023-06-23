import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css'
import { AuthContext } from '../../contexts/AuthProvider';
import { useContext } from 'react';


import useTeachers from '../../Hook/useTeacher';
import useStudent from '../../Hook/useStudent';
import useAdmin from '../../Hook/UseAdmin';
import { BsBookHalf, BsCardChecklist, BsCardText, BsClipboard2DataFill, BsFillCalendar2DateFill } from 'react-icons/bs';
import { BiNote } from 'react-icons/bi';
import { FaChalkboardTeacher, FaUserEdit, FaUsers } from 'react-icons/fa';







const DashLeftNav = () => {
    const { user } = useContext(AuthContext);
    const [isTeacher] = useTeachers(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    const [isStudent] = useStudent(user?.email)


    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/positive/${user?.email}`;
            const res = await fetch(url);
            const data = await res.json();
            setBookings(data);
        };

        fetchData();
    }, [user?.email]);

    const mainId = bookings.map(book => book.id);
    console.log(mainId);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const [role, setRoleStudent] = useState([]);
    useEffect(() => {

        const url = 'http://localhost:8000/admissions';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setRoleStudent(data);
            })
    }, [])
    console.log(role);


    return (
        <div>

            {/* <div className=' '>

                <Link to='/dashboardLayout'><button className='buttons w-full mt-2'>UserInfo</button></Link>

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
                        <Link className='w-full' to={`/dashboardLayout/AdmitCard/${bookings.id}`} ><button className='buttons w-full  mt-2'>Admit Card</button></Link>
                        <Link className='w-full' to={`/dashboardLayout/examResult/${bookings.id}`} ><button className='buttons w-full  mt-2'>Exam Result</button></Link>

                    </>
                }




            </div> */}

            <div className='bg-gray-50'>
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleDrawer}>
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <aside id="default-sidebar"
                    className={`fixed lg:sticky  left-0 z-40 w-64 h-screen transition-transform ${isOpen ? '-translate-x-full sticky sm:translate-x-0' : 'translate-x-0 sticky'
                        }`}
                    aria-label="Sidebar">
                    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul class="space-y-2 font-medium">
                            <li>

                                {
                                    isAdmin && <>
                                        <Link to='/dashboardLayout' class="flex mt-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                            <span class="ml-3">My Profile</span>
                                        </Link>
                                        <Link to="/dashboardLayout/addRoutine" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsFillCalendar2DateFill className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsFillCalendar2DateFill>
                                            <span class="ml-3">Add Routine</span>
                                        </Link>
                                        <Link to="/dashboardLayout/addNotice" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            {/* <BiSolidNotepad className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BiSolidNotepad> */}

                                            <BiNote className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BiNote>
                                            <span class="ml-3">Add Notice</span>
                                        </Link>
                                        <Link to="/dashboardLayout/AddBooks" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsBookHalf className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsBookHalf>
                                            <span class="ml-3">Add Books</span>
                                        </Link>
                                        <Link to="/dashboardLayout/addTeacher" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <FaChalkboardTeacher className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaChalkboardTeacher>
                                            <span class="ml-3">Add Teacher</span>
                                        </Link>
                                        <Link to="/dashboardLayout/allUsers" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <FaUsers className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaUsers>
                                            <span class="ml-3">All Users</span>
                                        </Link>
                                        <Link to="/dashboardLayout/allStudetns" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <FaUserEdit className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaUserEdit>
                                            <span class="ml-3">All Students</span>
                                        </Link>
                                        <Link to="/dashboardLayout/AddAdmitCard/student" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsCardChecklist className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsCardChecklist>
                                            <span class="ml-3">Add Admit Card</span>
                                        </Link>
                                        <Link to="/dashboardLayout/AddResult/student" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsCardText className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsCardText>
                                            <span class="ml-3">Add Result</span>
                                        </Link>
                                        <Link to="/dashboardLayout/DeleteData" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsClipboard2DataFill className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsClipboard2DataFill>
                                            <span class="ml-3">Delete Data</span>
                                        </Link>
                                    </>
                                }
                                {
                                    isTeacher && <>
                                        <Link to='/dashboardLayout' class="flex mt-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                            <span class="ml-3">My Profile</span>
                                        </Link>
                                        <Link to="/dashboardLayout/addRoutine" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsFillCalendar2DateFill className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsFillCalendar2DateFill>
                                            <span class="ml-3">Add Routine</span>
                                        </Link>
                                        <Link to="/dashboardLayout/addNotice" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            {/* <BiSolidNotepad className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BiSolidNotepad> */}

                                            <BiNote className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BiNote>
                                            <span class="ml-3">Add Notice</span>
                                        </Link>
                                        <Link to="/dashboardLayout/addTeacher" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <FaChalkboardTeacher className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaChalkboardTeacher>
                                            <span class="ml-3">Add Teacher</span>
                                        </Link>
                                        <Link to="/dashboardLayout/allStudetns" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <FaUserEdit className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaUserEdit>
                                            <span class="ml-3">All Students</span>
                                        </Link>
                                        <Link to="/dashboardLayout/AddAdmitCard/student" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsCardChecklist className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsCardChecklist>
                                            <span class="ml-3">Add Admit Card</span>
                                        </Link>
                                        <Link to="/dashboardLayout/AddResult/student" class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsCardText className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsCardText>
                                            <span class="ml-3">Add Result</span>
                                        </Link>

                                    </>
                                }
                                {
                                    isStudent && <>
                                        <Link to={`/dashboardLayout/StudentProfile/${user?.email}`} class="flex mt-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                            <span class="ml-3">My Profile</span>
                                        </Link>
                                        <Link to={`/dashboardLayout/AdmitCard/${mainId}`} class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsCardChecklist className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsCardChecklist>
                                            <span class="ml-3">My Admit Card</span>
                                        </Link>
                                        <Link to={`/dashboardLayout/examResult/${mainId}`} class="mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsCardText className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></BsCardText>
                                            <span class="ml-3">My Result</span>
                                        </Link>

                                    </>
                                }
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <div>



            </div>


        </div>

    );
};

export default DashLeftNav;