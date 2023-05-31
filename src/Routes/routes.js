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
        element: <Admission />,
      },
      {
        path: '/notice',
        element: <Notice />,
      },
      {
        path: '/noticeDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:8000/noticeDetails/${params.id}`),
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
    ],
  },
  {
    path: '/dashboardLayout',
    element: <DashBoard></DashBoard>,
    children: [
        {
            path: '/dashboardLayout/userProfile',
            element: <UserProfile></UserProfile>
        },
        {
            path: '/dashboardLayout/addRoutine',
            element: <DashAddRoutine></DashAddRoutine>
        },

    ]
},
])

export default router
