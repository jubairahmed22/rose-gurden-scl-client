import React from 'react';
const EventsImg = [
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

const Events = () => {
    return (
        <div>
            <h1 className='sportsTxt'>
                Welcome to our School Events page! Here, you can explore the diverse range of exciting events and activities that take place at our school throughout the year. From engaging workshops and spirited competitions to entertaining performances and community celebrations, our school events create a vibrant and inclusive environment for our students, staff, and the wider community.

                Join us for our annual Open House, where prospective students and their families have the opportunity to tour our campus.</h1>

            <div className='grid grid-cols-6 gap-4 mt-5'>
                {
                    EventsImg.map(events =>
                        <div>
                            <img src={events.image} alt=''></img>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Events;