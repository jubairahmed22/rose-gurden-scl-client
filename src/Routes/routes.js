import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import Library from '../Pages/Home/Library/Library'
import StudentSupport from '../Pages/Home/StudentSupport/StudentSupport'
import Examinations from '../Pages/Home/Examinations/Examinations'
import Teachers from '../Pages/Home/Teachers/Teachers'
import Admission from '../Pages/Admission/Admission'
import Notice from '../Pages/Notice/Notice'
import Gallary from '../Pages/Gallary/Gallary'
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About'
import NoticeDetails from '../Pages/Notice/NoticeDetails'
import DashBoard from '../Pages/DashBoard/DashBoard'
import DashAddRoutine from '../Pages/DashBoard/DashAddRoutine'
import UserProfile from '../Pages/DashBoard/UserProfile/UserProfile'
import PrivateRoute from './PrivateRoute'
import AdmissionPrint from '../Pages/Admission/AdmissionPrint'
import AllStudents from '../Pages/DashBoard/AllStudents/AllStudents'
import AllStudentsDetails from '../Pages/DashBoard/AllStudents/AllStudentsDetails'
import AddNotice from '../Pages/DashBoard/AddNotice/AddNotice'
import AllUsers from '../Pages/DashBoard/AllUsers/AllUsers'
import AddTeacher from '../Pages/DashBoard/AddTeacher/AddTeacher'
import DeleteData from '../Pages/DashBoard/DeleteData/DeleteData'
import LibraryDetails from '../Pages/Home/Library/LibraryDetails'
import AddBooks from '../Pages/DashBoard/AddBooks/AddBooks'
import Blog from '../Pages/Blog/Blog'
import BlogDetails from '../Pages/Blog/BlogDetails'
import StudentProfile from '../Pages/DashBoard/StudentProfile/StudentProfile'
import StudentAdmitCard from '../Pages/DashBoard/StudentAdmitCard/StudentAdmitCard'
import ExamResult from '../Pages/DashBoard/ExamResult/ExamResult'
import AddAdmitCard from '../Pages/DashBoard/AddAdmitCard/AddAdmitCard'
import AddResult from '../Pages/DashBoard/AddResult/AddResult'
import DashContent from '../Pages/DashBoard/DashContent/DashContent'
import MidExamOne from '../Pages/DashBoard/ExamResult/MidExamOne'
import FinalExamOne from '../Pages/DashBoard/ExamResult/FinalExamOne'
import MidExamTwo from '../Pages/DashBoard/ExamResult/MidExamTwo'
import FinalExamTwo from '../Pages/DashBoard/ExamResult/FinalExamTwo'
import MidExamThree from '../Pages/DashBoard/ExamResult/MidExamThree'
import FinalExamThree from '../Pages/DashBoard/ExamResult/FinalExamThree'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/library',
        element: <Library />,
      },
      {
        path: '/libraryDetails/:id',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/libraryDetails/${params.id}`),
        element: <LibraryDetails />,
      },
      {
        path: '/studentSupport',
        element: <StudentSupport />,
      },
      {
        path: '/examinations',
        element: <PrivateRoute><Examinations /></PrivateRoute>,
      },
      {
        path: '/teachers',
        element: <Teachers />,
      },
      {
        path: '/admission',
        element: <PrivateRoute><Admission></Admission></PrivateRoute>,
      },
      {
        path: '/admissionDataPrint',
        element: <AdmissionPrint />,
      },
      {
        path: '/notice',
        element: <Notice />,
      },
      {
        path: '/noticeDetails/:id',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/noticeDetails/${params.id}`),
        element: <NoticeDetails />,
      },
      {
        path: '/gallery',
        element: <Gallary />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blogDetails/:id',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/blog/${params.id}`),
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: '/dashboardLayout',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/dashboardLayout',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/dashboardLayout/addRoutine',
        element: <DashAddRoutine></DashAddRoutine>
      },
      {
        path: '/dashboardLayout/allStudetns',
        element: <AllStudents></AllStudents>
      },
      {
        path: '/dashboardLayout/allStudetnsDetails/:id',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissionss/${params.id}`),
        element: <AllStudentsDetails></AllStudentsDetails>
      },
      {
        path: '/dashboardLayout/addNotice',
        element: <AddNotice></AddNotice>
      },
      {
        path: '/dashboardLayout/allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboardLayout/addTeacher',
        element: <AddTeacher></AddTeacher>
      },
      {
        path: '/dashboardLayout/DeleteData',
        element: <DeleteData></DeleteData>
      },
      {
        path: '/dashboardLayout/AddBooks',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/dashboardLayout/StudentProfile/:email',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/positive/${params.email}`),
        element: <StudentProfile></StudentProfile>
      },
      {
        path: '/dashboardLayout/AdmitCard/:id',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admitCard/${params.id}`),
        element: <StudentAdmitCard></StudentAdmitCard>
      },
      {
        path: '/dashboardLayout/examResult/:id',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/ExamResult/${params.id}`),
        element: <ExamResult></ExamResult>
      },
      {
        path: '/dashboardLayout/AddAdmitCard/:role',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/${params.role}`),
        element: <AddAdmitCard></AddAdmitCard>
      },
      {
        path: '/dashboardLayout/AddResult/:role',
        loader: ({ params }) => fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/${params.role}`),
        element: <AddResult></AddResult>
      },
      {
        path: '/dashboardLayout/MidOne/:exam',
        loader: ({ params }) => fetch(`http://localhost:8000/ExamResults/${params.exam}`),
        element: <MidExamOne></MidExamOne>
      },
      {
        path: '/dashboardLayout/FinalOne/:exam',
        loader: ({ params }) => fetch(`http://localhost:8000/ExamResults/${params.exam}`),
        element: <FinalExamOne></FinalExamOne>
      },
      {
        path: '/dashboardLayout/MidTwo/:exam',
        loader: ({ params }) => fetch(`http://localhost:8000/ExamResults/${params.exam}`),
        element: <MidExamTwo></MidExamTwo>
      },
      {
        path: '/dashboardLayout/FinalTwo/:exam',
        loader: ({ params }) => fetch(`http://localhost:8000/ExamResults/${params.exam}`),
        element: <FinalExamTwo></FinalExamTwo>
      },
      {
        path: '/dashboardLayout/MidThree/:exam',
        loader: ({ params }) => fetch(`http://localhost:8000/ExamResults/${params.exam}`),
        element: <MidExamThree></MidExamThree>
      },
      {
        path: '/dashboardLayout/FinalThree/:exam',
        loader: ({ params }) => fetch(`http://localhost:8000/ExamResults/${params.exam}`),
        element: <FinalExamThree></FinalExamThree>
      },

    ]
  },
])

export default router
