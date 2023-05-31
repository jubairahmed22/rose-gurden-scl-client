import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeSlider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const HomeSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='cover'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='slideColor w-full h-full '>
               <div className='grid grid-cols-2 gap-5 max-w-[1120px] mx-auto h-full'>
               <div className='p-10'>
                 <h1 className='slideTxt'>We maintain the highest standards in education to help each child realize their potential</h1>
                </div>
                <div className=''>
                 <img src='https://i.ibb.co/WfHkHwB/Rectangle-54.png' alt=''></img>
                </div>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slideColor w-full h-full '>
               <div className='grid grid-cols-2 gap-5 max-w-[1120px] mx-auto h-full'>
               <div className='p-10'>
                 <h1 className='slideTxt'>We maintain the highest standards in education to help each child realize their potential</h1>
                </div>
                <div className=''>
                 <img src='https://i.ibb.co/WfHkHwB/Rectangle-54.png' alt=''></img>
                </div>
               </div>
            </div>
        </SwiperSlide>
     
           
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default HomeSlider;