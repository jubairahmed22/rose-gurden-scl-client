import React from 'react';
const cultureImg = [
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

const CultureGallary = () => {
    return (
        <div>
            <h1 className='sportsTxt'>Welcome to our cultural program page! Here, you can explore the vibrant world of cultural events and activities that take place at our school. From mesmerizing music and dance performances to thought-provoking art exhibitions and captivating theater productions, our cultural program celebrates the rich diversity and creativity of our students. We provide a platform for students to express themselves, share their talents, and engage with different cultures.

                Immerse yourself in a kaleidoscope of cultural experiences as you witness the rhythmic beats of traditional music and the graceful movements of various dance forms. Our talented students bring to life the traditions and customs of different cultures, transporting you to far-off lands and connecting you to global heritage.</h1>
        
                <div className='grid grid-cols-6 gap-4 mt-5'>
              {
                cultureImg.map(culture=>
                <div>
                    <img src={culture.image} alt=''></img>
                </div>    
                )
              }
           </div>
        </div>
    );
};

export default CultureGallary;