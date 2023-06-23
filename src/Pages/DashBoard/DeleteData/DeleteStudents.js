import { Spinner } from 'flowbite-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DeleteStudents = () => {
    const [students, setStudents] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchstudents = async () => {
            try {
                const response = await fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchstudents();
    }, []);
    
    console.log(students);

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
               <div className='max-w-[1090px] mx-auto noticeBoxTwo = p-5'>
                <h1 className='text-2xl font-bold text-white text-center'>Delete Students Data</h1>
                <hr className='lineTwo mt-5'></hr>
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
                               
                                <th className='tableHeadingDesh font-2xl  '>Name</th>
                      
                                
                                <th className='tableHeadingDesh'>ID</th>
                                <th className='tableHeadingDesh'>Phone</th>
                                <th className='tableHeadingDesh'>Email</th>
                                <th className='tableHeadingDesh'>Class</th>
                                <th className='tableHeadingDesh'>View</th>
                                <th className='tableHeadingDesh'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {students.length === 0 ? <div><Spinner /></div> : students.filter((info) => info.email.toLowerCase().includes(query)).map((student, index) => (
                            <tr className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{student.firstName} {student.LastName}</td>
                                <td>{student.id}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>
                                <td>{student.admission}</td>
                                <td><Link to={`/dashboardLayout/allStudetnsDetails/${student.id}`}>
                                      view
                                        
                                    </Link>
                                </td>
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

export default DeleteStudents;