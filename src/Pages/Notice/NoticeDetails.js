import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Notice.css'
import Footer from '../Shared/Footer';

const NoticeDetails = () => {
    const allNotice = useLoaderData();

    return (
        <div>
            <div className='NoticeAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxNotice'>
                                <h1 className='AdmissionLibrary pl-5 pt-1'>Notice</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1090px] mx-auto noticeBoxTwo mt-10 p-10'>
            <h1 className='noticeBoard'>Notice Board</h1>
            <hr className='lineThree mt-3'></hr>
                <div className=''>
                    {
                        allNotice.map(notice =>
                            <div>
                                <h1 className='text-center applicationName mt-5'>{notice.name}</h1>
                                 <p className='applicationPera mt-20'>{notice.noticeTo}</p>
                                 <p className='applicationPera mt-10'>{notice.noticeHeading}</p>
                                 <p className='applicationPera mt-10'>{notice.noticeMain}</p>
                                 <p className='applicationPera mt-10'>{notice.noticeEnd}</p>
                            </div>
                        )
                    }
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default NoticeDetails;