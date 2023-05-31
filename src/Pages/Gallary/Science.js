import React from 'react';

const ScienceImg = [
    {
        image: "https://i.ibb.co/m037KTH/Rectangle-70-1.png"
    },
    {
        image: "https://i.ibb.co/DCjntRg/Rectangle-71-1.png"
    },
    {
        image: "https://i.ibb.co/gr6gyvP/Rectangle-72-1.png"
    },
    {
        image: "https://i.ibb.co/1QNsXpZ/Rectangle-73-1.png"
    },
    {
        image: "https://i.ibb.co/gTNfJBH/Rectangle-74-1.png"
    },
    {
        image: "https://i.ibb.co/Qb8t6th/Rectangle-75-1.png"
    },
    {
        image: "https://i.ibb.co/cJym6Nj/Rectangle-76-1.png"
    },
    {
        image: "https://i.ibb.co/dbLBs7R/Rectangle-77-1.png"
    },
    {
        image: "https://i.ibb.co/x3qdPZY/Rectangle-79-1.png"
    },
    {
        image: "https://i.ibb.co/Z2d224f/Rectangle-80-1.png"
    },
    {
        image: "https://i.ibb.co/3rpyL6Z/Rectangle-93-1.png"
    },
    {
        image: "https://i.ibb.co/r6x58s5/Rectangle-94.png"
    }

]

const Science = () => {
    return (
        <div>
            <h1 className='sportsTxt'>Welcome to our Science fair  you can delve into the fascinating world of scientific exploration and discovery that takes place at our school. From innovative experiments and groundbreaking research projects to hands-on demonstrations and interactive exhibits, our Science Fair celebrates the curiosity and ingenuity of our students.

                Prepare to be amazed as you explore the myriad of scientific disciplines on display. </h1>

            <div className='grid grid-cols-6 gap-4 mt-5'>
                {
                    ScienceImg.map(science =>
                        <div>
                            <img src={science.image} alt=''></img>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Science;