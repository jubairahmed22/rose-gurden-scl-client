import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteRoutine = () => {
    const [routine, setRoutines] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addRoutine');
                const data = await response.json();
                setRoutines(data);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };

        fetchNotices();
    }, []);
    console.log(routine);

    const handleRemoveItem = (id) => {
        const proceed = window.confirm(
          'Are you sure, you want to cancel this order',
        );
        if (proceed) {
          fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/routine/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
              
                const remaining = routine.filter((odr) => odr._id !== id);
                setRoutines(remaining);
                alert('deleted successfully');
              }
            });
        }
      };
    return (
        <div>
             <div className='max-w-[1090px] mx-auto noticeBoxTwo = p-5'>
                <h1 className='text-2xl font-bold text-white text-center'>Delete Routine Data</h1>
                <hr className='lineTwo mt-5'></hr>
                <div className="overflow-x-auto mt-5">
                <div className='flex items-center justify-center '>
        <h1 className='text-lg text-white '>Search Date</h1>
          <input type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search" className="shadow-2xl input input-bordered input-primary w-full max-w-2xl m-10 " />

        </div>
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='tableHeadingDesh'></th>
                               
                                <th className='tableHeadingDesh font-2xl  '>Date</th>
                      
                                
                                <th className='tableHeadingDesh'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {routine.length === 0 ? <div><Spinner /></div> : routine.filter((info) => info.NewDate.toLowerCase().includes(query)).reverse().map((data, index) => (
                                <tr key={index}>
                                    <th className='tableDataDesh '>{index + 1}</th>
                                    <td className='tableDataDesh'>{data.NewDate}</td>
                                   
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

export default DeleteRoutine;