import React, { useEffect, useState } from 'react';
import './AllStudents.css'
import { Link } from 'react-router-dom';
import { AiOutlineLink } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { Spinner } from 'flowbite-react';

const AllStudents = () => {

    const [students, setStudents] = useState([]);
    const [query, setQuery] = useState("");



    const fetchstudents = async () => {
      try {
        const response = await fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
    useEffect(() => {
      fetchstudents();
    }, []);
    
    
    console.log(students);

    const handleMakeStudent = id => {
      fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/student/${id}`, {
        method: 'PUT',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              toast.success('Make verify successful.')
    
            // Re-fetch the updated user data
            fetchstudents(); // Call the fetchUsers function again to update the user data
          }
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occur during the request
        });
    }

    const handleRemoveItem = (id) => {
        const proceed = window.confirm(
          'Are you sure, you want to cancel this order',
        );
        if (proceed) {
          fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                alert('deleted successfully');
                const remaining = students.filter((odr) => odr._id !== id);
                setStudents(remaining);
              }
            });
        }
      };


    return (
        <div>
       
            <div className='p-5 backGroundCol'>
                <h1 className='text-3xl font-bold  text-white text-center '>All Students</h1>
                <div className="overflow-x-auto mt-5">
                <div className='flex items-center justify-center '>

<h1 className='text-lg text-white '>Search Email</h1>
<input type="text"
onChange={(e) => setQuery(e.target.value)}
placeholder="Search" className="shadow-2xl input input-bordered input-primary w-full max-w-2xl m-10 " />

</div>
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th className='tableHeadingDesh'></th>
                            <th className='tableHeadingDesh'>Name</th>
                            <th className='tableHeadingDesh'>Id</th>
                            <th className='tableHeadingDesh'>Email</th>
                            <th className='tableHeadingDesh'>Class</th>
                            <th className='tableHeadingDesh'>verify </th>
                            <th className='tableHeadingDesh'>view </th>
                            {/* <th className='tableHeadingDesh'>Details</th> */}
                            <th className='tableHeadingDesh'>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.length === 0 ? <div><Spinner /></div> : students.filter((info) => info.email.toLowerCase().includes(query)).map((student, index) => (
                            <tr className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{student.firstName} {student.LastName}</td>
                                <td>{student.id}</td>
                                <td>{student.email}</td>
                                
                                <td>{student.admission}</td>
                                <td>{ student?.role !== 'student' && <button onClick={() => handleMakeStudent(student._id)} className='btn btn-xs btn-primary'>Make Student</button>}</td>
                                <td ><Link to={`/dashboardLayout/allStudetnsDetails/${student.id}`}>
                                View</Link></td>
                                <td>
                                <button
                              onClick={() => handleRemoveItem(student._id)}
                              className="btn btn-square"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>  
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllStudents;