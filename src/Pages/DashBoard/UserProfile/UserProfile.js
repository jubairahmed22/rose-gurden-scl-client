import React, { useContext } from 'react';
import './UserProfile.css'
import { AuthContext } from '../../../contexts/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>

            <div className='mainMjr h-screen'>
            {/* <div class=' ribon bg-orange-500'></div> */}


<div className="card   w-96 cardMain shadow-xl  mt-10">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL} alt="" className="rounded-xl w-32 h-32" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <h2 className="card-title">{user?.email}</h2>
                    
                </div>
            </div> 
                {/* <div className='absolute w-28 h-3 rounded ltlBox mb-56'></div> */}
            </div>
        </div>
    );
};

export default UserProfile;