import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Library.css'

const LibraryDetails = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div >
            <div className='grid grid-cols-3 gap-5 max-w-[1090px] mx-auto  mt-10'>
                {
                    allBooks.map(book =>
                        <div className="DetailsCard bg-base-100 shadow-xl">
                            <figure><img src={book.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-center detailsCardTxt">{book.subject}</h2>

                                <div className="card-actions justify-center">
                                    <button className="welcomeButton">
                                    <a  target="blank" href={book.pdf}>View</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LibraryDetails;