import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import './AllUsers.css';
import { Spinner } from 'flowbite-react';

const AllUsers = () => {
    
    const [Users, setUsers] = useState([]);
    const [query, setQuery] = useState("");


    const fetchUsers = async () => {
      try {
        const response = await fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
    useEffect(() => {
      fetchUsers();
    }, []);
    
    const handleRemoveItem = (id) => {
        const proceed = window.confirm(
          'Are you sure, you want to cancel this order',
        );
        if (proceed) {
          fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/users/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                fetchUsers();
                // alert('deleted successfully');
                
                // const remaining = Users.filter((odr) => odr._id !== id);
                // setUsers(remaining);
              }
            });
        }
      };

      const handleMakeAdmin = id => {
        fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/users/admin/${id}`, {
          method: 'PUT',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('Make admin successful.')
      
              // Re-fetch the updated user data
              fetchUsers(); // Call the fetchUsers function again to update the user data
            }
          })
          .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur during the request
          });
      }
      const handleMakeTeacher = id => {
        fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/users/teacher/${id}`, {
          method: 'PUT',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('Make teacher successful.')
      
              // Re-fetch the updated user data
              fetchUsers(); // Call the fetchUsers function again to update the user data
            }
          })
          .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur during the request
          });
      }
      
    
    return (
        <div>
            <div className='p-5 backGround'>
                <div className="overflow-x-auto">
                <h1 className='text-3xl font-bold text-white text-center mb-5 mt-2'>All Users</h1>
                <div className='flex items-center justify-center '>

<h1 className='text-lg text-white '>Search Email</h1>
<input type="text"
onChange={(e) => setQuery(e.target.value)}
placeholder="Search" className="shadow-2xl input input-bordered input-primary w-full max-w-2xl m-10 " />

</div>
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
        
                                <th>Teacher</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Users.length === 0 ? <div><Spinner /></div> : Users.filter((info) => info.email.toLowerCase().includes(query)).reverse().map((user, index) => (
                            <tr className="bg-base-200">
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user?.role !== 'teacher' && <button onClick={() => handleMakeTeacher(user._id)} className='btn btn-xs btn-primary'>Make Teacher</button>}</td>

                             
                                <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>

                                <td>
                                <button
                              onClick={() => handleRemoveItem(user._id)}
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

export default AllUsers;