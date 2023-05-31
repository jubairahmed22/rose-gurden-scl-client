import React from 'react';
import './Library.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Footer from '../../Shared/Footer';


const onlineClass = [
    {
        name: "Class - I"
    },
    {
        name: "Class - II"
    },
    {
        name: "Class - III"
    },
    {
        name: "Class - V"
    },
    {
        name: "Class - VI"
    },
    {
        name: "Class - VII"
    },
    {
        name: "Class - VIII"
    },
    {
        name: "Class - IX"
    },
    {
        name: "Class - X"
    },
]

const Library = () => {

    // your onlineClass array

    const itemsPerPage = 5; // number of items to display per page

    const [currentPage, setCurrentPage] = useState(1); // state variable for the current page

    const totalPages = Math.ceil(onlineClass.length / itemsPerPage); // calculate the total number of pages

    // Function to handle next page click
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle previous page click
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return (
        <div>
            <div className='LibraryAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxLibrary '>
                                <h1 className='textLibrary'>Library</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1150px] mx-auto'>
                <div className='grid grid-cols-3 gap-5 max-w-[1090px] mx-auto  mt-10'>
                    <div className='col-span-2 '>
                        <div class="grid grid-rows-3 grid-flow-col gap-4">
                            <div class="row-end-3 row-span-2 h-56 bg-indigo-500 ...">
                                <img src='https://i.ibb.co/y4Qb33z/Rectangle-87.png' alt='' />
                            </div>
                            <div class="row-start-2 row-span-2 h-56 bg-indigo-500 ...">
                                <img src='https://i.ibb.co/fGGZWb4/Rectangle-88.png' alt='' />
                            </div>

                            <div class="row-end-3 row-span-2 h-56 bg-indigo-500 ...">
                                <img src='https://i.ibb.co/VjPT94V/Rectangle-89-1.png' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className=' justify-self-end noticeCeta p-2'>
                        <div>
                            <div className='inline-flex items-center '>
                                <h1 className='noticeHeading pt-2 pb-5'>Online Books </h1>
                                <div className='ml-5 noticeHeading'>
                                    <button onClick={previousPage}><AiOutlineLeft /></button>
                                    <button onClick={nextPage} ><AiOutlineRight /></button>
                                </div>
                            </div>
                            <hr className=''></hr>
                            <div className=''>
                                {
                                    onlineClass.slice(startIndex, endIndex).map(not =>
                                        <Link>
                                            <h1 className='ClassCetaName pt-10'>{not.name}</h1>
                                        </Link>
                                    )
                                }

                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-[1090px] mx-auto mt-48 mb-32'>
                <div className='grid grid-cols-2 gap-5'>
                    <div className=''>
                        <h1 className='welcome'>Welcome to our primary school library! Our collection includes a wide range of books, magazines, and educational resources. Borrow books regularly and take advantage of our friendly and knowledgeable librarians. Join our programs to foster a love of reading and promote literacy skills. Stop by soon!</h1>
                       <div className='grid grid-cols-3 gap-2 pt-5'>
                          <div className='col-span-2 h-20'>
                            <img src='https://i.ibb.co/WHPTJ6Q/Rectangle-92.png' alt=''></img>
                          </div>
                          <div className='h-20'>
                          <img src='https://i.ibb.co/SQcNcJh/Rectangle-93.png' alt=''></img>

                          </div>
                       </div>
                    </div>
                    <div className='bg-indigo-500 h-56'>
                    <img src='https://i.ibb.co/kSQhrp8/Rectangle-90.png' alt=''></img>
                    </div>
                </div>
            </div>
            <Footer  ></Footer>
        </div>
    );
};

export default Library;