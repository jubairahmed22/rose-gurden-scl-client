import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const DeleteTeacher = () => {
    const [teachers, setTeachers] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {

        const url = 'https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addTeacher';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setTeachers(data);
            })
    }, [])

    const handleRemoveItem = (id) => {
        const proceed = window.confirm(
          'Are you sure, you want to cancel this order',
        );
        if (proceed) {
          fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/teacher/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
              
                const remaining = teachers.filter((odr) => odr._id !== id);
                setTeachers(remaining);
                alert('deleted successfully');
              }
            });
        }
      };
    return (
        <div>
                 <div className='max-w-[1090px] mx-auto noticeBoxTwo = p-5'>
                <h1 className='text-2xl font-bold text-white text-center'>Delete Teachers Data</h1>
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
                               
                                <th className='tableHeadingDesh font-2xl  '>Joining Date</th>
                                <th className='tableHeadingDesh font-2xl  '>Name</th>
                                <th className='tableHeadingDesh font-2xl  '>Email</th>
                      
                                
                                <th className='tableHeadingDesh'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {teachers.length === 0 ? <div><Spinner /></div> : teachers.filter((info) => info.email.toLowerCase().includes(query)).reverse().map((data, index) => (
                                <tr key={index}>
                                    <th className='tableDataDesh '>{index + 1}</th>

                                    <td className='tableDataDesh'>{data.NewDate}</td>
                                    <td>{data.firstName} {data.LastName}</td>
                                    <td>{data.email}</td>
                                   
                                    {/* <td className='tableDataDesh'><Link to={`/noticeDetails/${data.id}`}>
                                        View
                                    </Link>
                                    </td> */}
                                    <td>
                                        <button
                                          onClick={() => handleRemoveItem(data._id)}
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

export default DeleteTeacher;