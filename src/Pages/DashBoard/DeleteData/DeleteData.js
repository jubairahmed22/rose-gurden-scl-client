import React from 'react';
import './DeleteData.css'
import { useState } from 'react';
import DeleteNotice from './DeleteNotice';
import DeleteRoutine from './DeleteRoutine';
import DeleteTeacher from './DeleteTeacher';
import DeleteStudents from './DeleteStudents';
import DeleteBooks from './DeleteBooks';
import { Link } from 'react-router-dom';

const DeleteData = () => {
    const [active, setActive] = useState("FirstCard")
    return (
        <div>
            <div className='pt-5 backGroundDelete'>
                <div className='grid grid-cols-1 place-items-center'>
                    
<div class="inline-flex rounded-md shadow-sm">
  <Link onClick={() => setActive("ThirdCard")} href="#" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Delete Teachers Data
  </Link>
  <Link  onClick={() => setActive("FourthCard")} href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Delete Students Data
  </Link>
  <Link  onClick={() => setActive("FirstCard")} href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  Delete Notice Data
  </Link>
  <Link  onClick={() => setActive("FifthCard")}  href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  Delete Book Data
  </Link>
  <Link onClick={() => setActive("SecoundCard")} href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Delete Routine Data
  </Link>
  {/* <Link onClick={() => setActive("FirstCard")} href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Delete Notice Data
  </Link>
  <Link onClick={() => setActive("FifthCard")} href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Delete Book Data
  </Link> */}
</div>


                    {/* <button onClick={() => setActive("ThirdCard")} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Delete Teachers Data
                    </button>
                    <button onClick={() => setActive("FourthCard")} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Delete Students Data
                    </button>
                    <details className="dropdown">
                        <button type="button" class="">Alternative</button>

                        <summary className="m-1 btn btn-accent text-white">Delete Others Data</summary>
                        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setActive("SecoundCard")} className="grpButtons">
                                Delete Routine Data
                            </button></li>
                            <li><button onClick={() => setActive("FirstCard")} className="grpButtons">Delete Notice Data</button>
                            </li>
                            <li><button onClick={() => setActive("FifthCard")} className="grpButtons">Delete Books Data</button>
                            </li>
                        </ul>
                    </details> */}

                </div>

                <div className='mt-10 p-5'>
                    {active === "FirstCard" && <DeleteNotice title="1" />}
                    {active === "SecoundCard" && <DeleteRoutine title="2" />}
                    {active === "ThirdCard" && <DeleteTeacher title="3" />}
                    {active === "FourthCard" && <DeleteStudents title="4" />}
                    {active === "FifthCard" && <DeleteBooks title="4" />}
                </div>
            </div>
        </div>
    );
};

export default DeleteData;