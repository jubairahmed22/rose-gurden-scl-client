import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './DeleteData.css'
import { Spinner } from 'flowbite-react';

const DeleteNotice = () => {
    const [notice, setnotice] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {

        const url = 'https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/noticeDetails';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setnotice(data);
            })
    }, [])

    const handleRemoveItem = (id) => {
        const proceed = window.confirm(
          'Are you sure, you want to cancel this order',
        );
        if (proceed) {
          fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/notice/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                alert('deleted successfully');
                const remaining = notice.filter((odr) => odr._id !== id);
                setnotice(remaining);
              }
            });
        }
      };
    return (
        <div>
            <div className='max-w-[1090px] mx-auto noticeBoxTwo = p-5'>
                <h1 className='text-2xl font-bold text-white text-center'>Delete Notice Data</h1>
                <hr className='lineTwo mt-5'></hr>
                <div className="overflow-x-auto mt-5">
                <div className='flex items-center justify-center '>
        <h1 className='text-lg text-white '>Search Name</h1>
          <input type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search" className="shadow-2xl input input-bordered input-primary w-full max-w-2xl m-10 " />

        </div>
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='tableHeadingDesh'></th>
                                <th className='tableHeadingDesh'>Title</th>
                                <th className='tableHeadingDesh'>Date</th>
                                <th className='tableHeadingDesh'>View</th>
                                <th className='tableHeadingDesh'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {notice.length === 0 ? <div><Spinner /></div> : notice.filter((info) => info.name.toLowerCase().includes(query)).reverse().map((data, index) => (
                                <tr key={index}>
                                    <th className='tableDataDesh '>{index + 1}</th>
                                    <td className='tableDataDesh'>{data.name}</td>
                                    <td className='tableDataDesh'>{data.date}</td>
                                    <td className='tableDataDesh'><Link to={`/noticeDetails/${data.id}`}>
                                        View
                                    </Link></td>
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

export default DeleteNotice;