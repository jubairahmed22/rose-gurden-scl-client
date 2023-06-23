import { Spinner } from 'flowbite-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const DeleteBooks = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/libraryDetails');
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };

        fetchNotices();
    }, []);
    console.log(books);

    const handleRemoveItem = (id) => {
        const proceed = window.confirm(
          'Are you sure, you want to cancel this order',
        );
        if (proceed) {
          fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/libraryDetails/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
              
                const remaining = books.filter((odr) => odr._id !== id);
                setBooks(remaining);
                alert('deleted successfully');
              }
            });
        }
      };
    return (
        <div>
               <div className='max-w-[1090px] mx-auto noticeBoxTwo = p-5'>
                <h1 className='text-2xl font-bold text-white text-center'>Delete Books Data</h1>
                <hr className='lineTwo mt-5'></hr>
                <div className="overflow-x-auto mt-5">
                <div className='flex items-center justify-center '>
        <h1 className='text-lg text-white '>Search Books</h1>
          <input type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search" className="shadow-2xl input input-bordered input-primary w-full max-w-2xl m-10 " />

        </div>
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='tableHeadingDesh'></th>
                                <th className='tableHeadingDesh'>Date</th>
                                <th className='tableHeadingDesh'>Books Name</th>
                               
                                <th className='tableHeadingDesh '>Class Name</th>
                      
                                
                                <th className='tableHeadingDesh'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {books.length === 0 ? <div><Spinner /></div> : books.filter((info) => info.subject.toLowerCase().includes(query)).reverse().map((data, index) => (
                                <tr key={index}>
                                    <th className='tableDataDesh '>{index + 1}</th>
                                    <td className='tableDataDesh'>{data.NewDate}</td>
                                    <td className='tableDataDesh'>{data.subject}</td>
                                    <td className='tableDataDesh'>{data.id}</td>
                                   
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

export default DeleteBooks;