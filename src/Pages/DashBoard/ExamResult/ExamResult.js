import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MidExamOne from './MidExamOne';
import FinalExamOne from './FinalExamOne';



const ExamResult = () => {
    const students = useLoaderData();
    console.log(students);



    return (
        <div>
            <div>
                <div>
                    <div className='pt-5'>
                        <div className='grid grid-cols-1 place-items-center'>

                            <h1 className='text-4xl font-bold mt-10'>Choose Your Exam-Result</h1>

                            <div class="inline-flex rounded-md shadow-sm mt-20" role="group">
                                <Link to="/dashboardLayout/MidOne/mid-exam-1">
                                    <button type="button" class="inline-flex w-96 h-20 text-center items-center px-4 py-2 text-3xl font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">

                                        First Term Mid Exam
                                    </button>
                                </Link>

                                <Link to="/dashboardLayout/FinalOne/final-exam-1">
                                    <button type="button" class="inline-flex w-96 h-20 items-center text-3xl px-4 py-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">

                                        First Term Final Exam
                                    </button>
                                </Link>
                            </div>

                            <div class="inline-flex rounded-md shadow-sm mt-10" role="group">
                                <Link to="/dashboardLayout/MidTwo/mid-exam-2">
                                    <button type="button" class="inline-flex w-96 h-20 text-center items-center px-4 py-2 text-3xl font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">

                                        Second Term Mid Exam
                                    </button>
                                </Link>

                                <Link to="/dashboardLayout/FinalTwo/final-exam-2">
                                    <button type="button" class="inline-flex w-96 h-20 items-center text-3xl px-4 py-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">

                                        Second Term Final Exam
                                    </button>
                                </Link>
                            </div>
                            <div class="inline-flex rounded-md shadow-sm mt-10" role="group">
                                <Link to="/dashboardLayout/MidThree/mid-exam-3">
                                    <button type="button" class="inline-flex w-96 h-20 text-center items-center px-4 py-2 text-3xl font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">

                                        Third Term Mid Exam
                                    </button>
                                </Link>

                                <Link to="/dashboardLayout/FinalThree/final-exam-3">
                                    <button type="button" class="inline-flex w-96 h-20 items-center text-3xl px-4 py-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">

                                        Third Term Final Exam
                                    </button>
                                </Link>
                            </div>

                            {/* <Link to="/dashboardLayout/MidOne/mid-exam-1">
                                <button className="grpButtons">Mid One</button>
                            </Link>
                            <Link to="/dashboardLayout/FinalOne/final-exam-1">
                                <button className="grpButtons">
                                    Final One
                                </button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamResult;