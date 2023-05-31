import React from 'react';

const sportsImg = [
   {
     image:"https://i.ibb.co/m037KTH/Rectangle-70-1.png"
   },
   {
     image:"https://i.ibb.co/DCjntRg/Rectangle-71-1.png"
   },
   {
     image:"https://i.ibb.co/gr6gyvP/Rectangle-72-1.png"
   },
   {
     image:"https://i.ibb.co/1QNsXpZ/Rectangle-73-1.png"
   },
   {
     image:"https://i.ibb.co/gTNfJBH/Rectangle-74-1.png"
   },
   {
     image:"https://i.ibb.co/Qb8t6th/Rectangle-75-1.png"
   },
   {
     image:"https://i.ibb.co/cJym6Nj/Rectangle-76-1.png"
   },
   {
     image:"https://i.ibb.co/dbLBs7R/Rectangle-77-1.png"
   },
   {
     image:"https://i.ibb.co/x3qdPZY/Rectangle-79-1.png"
   },
   {
     image:"https://i.ibb.co/Z2d224f/Rectangle-80-1.png"
   },
   {
     image:"https://i.ibb.co/3rpyL6Z/Rectangle-93-1.png"
   },
   {
     image:"https://i.ibb.co/r6x58s5/Rectangle-94.png"
   }

]

const SportsGallary = () => {
    return (
        <div>
            <h1 className='sportsTxt'>Welcome to our sports program page! Here, you can explore the exciting world of sports and athletic activities that take place at our school. From thrilling matches and tournaments to fitness challenges and sports clinics, our sports program celebrates the passion and dedication of our students. We provide a platform for students to showcase their athletic abilities, foster teamwork, and promote a healthy and active lifestyle. Check out our page for updates on upcoming events and highlights from our past sports programs.</h1>
           <div className='grid grid-cols-6 gap-4 mt-5'>
              {
                sportsImg.map(sports=>
                <div>
                    <img src={sports.image} alt=''></img>
                </div>    
                )
              }
           </div>
        </div>
    );
};

export default SportsGallary;