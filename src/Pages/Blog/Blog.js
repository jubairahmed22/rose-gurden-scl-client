import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [news, setnews] = useState([]);
    useEffect(() => {

        const url = 'news.json';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setnews(data);
            })
    }, [])
    return (
        <div>
        
            <div className='grid grid-cols-3 gap-5 place-items-center max-w-[1090px] mx-auto mt-10'>
                {
                    news.map(not =>
                        <div className="card card-compact max-w-[400px] h-96 bg-base-100 shadow-xl">
                            <figure><img src={not.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{not.name}</h2>
                                <p>{not.description}</p>
                                <div className="">
                                    <button className="btn welcomeButton w-full"><Link to={`/blogDetails/${not.id}`}>Details
                                    </Link></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blog;