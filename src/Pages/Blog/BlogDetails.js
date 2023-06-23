import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div>
           <div className='max-w-[1090px] mx-auto'>
              <div className='grid grid-cols-1 place-items-center'>
                {
                    allBooks.map(all =>
                        <div className="hero min-h-screen max-w-[800px]">
                        <div className="hero-content flex-col lg:flex-row">
                          <img src={all.img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                          <div>
                            <h1 className="text-5xl font-bold">{all.name}</h1>
                            <p className="py-6">{all.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                }
              </div>
           </div>
        </div>
    );
};

export default BlogDetails;