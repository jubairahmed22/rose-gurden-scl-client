import React from 'react';
import './Gallary.css'
import { useState } from 'react';
import SportsGallary from './SportsGallary';
import CultureGallary from './CultureGallary';
import Science from './Science';
import Events from './Events';
import Footer from '../Shared/Footer';

const Gallary = () => {
    const [active, setActive] = useState("FirstCard")
    return (
        <div>
            <div className='GalleryAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxGallery'>
                                <h1 className='AdmissionLibrary pl-5 pt-1'>Photo Gallery</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1090px] mx-auto galleryBoxTwo mt-10 '>
                <div className='pt-5'>
                    <div className='grid grid-cols-4 place-items-center'>
                        <button onClick={() => setActive("FirstCard")} className="grpButtons">SPORTS</button>
                        <button onClick={() => setActive("SecoundCard")} className="grpButtons">
                            CULTURAL PROGRAM
                        </button>
                        <button onClick={() => setActive("ThirdCard")} className="grpButtons">
                            SCIENCE FAIR
                        </button>
                        <button onClick={() => setActive("FourthCard")} className="grpButtons">
                            SCHOOL EVENTS
                        </button>

                    </div>

                    <div className='mt-10 p-5'>
                        {active === "FirstCard" && <SportsGallary title="1" />}
                        {active === "SecoundCard" && <CultureGallary title="2" />}
                        {active === "ThirdCard" && <Science title="3" />}
                        {active === "FourthCard" && <Events title="4" />}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallary;