import React from 'react';
import './About.css'
import Footer from '../Shared/Footer';

const About = () => {
    return (
        <div>
            <div className='aboutAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxAbout'>
                                <h1 className='AdmissionLibrary pl-5 pt-1'>About</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1090px] mx-auto mt-10 boxAboutTwo p-5'>
                <h1 className='aboutTxt'>Rose Garden Preparatory School</h1>
                <div className='mt-10'>
                    <img src='https://i.ibb.co/THqm6xY/350167393-1295146681082044-7121581967392100656-n.jpg' alt=''></img>
                </div>
                <div>
                    <h1 className='aboutPera mt-5'>Welcome to our primary school website! Our school provides a safe and nurturing environment where students can learn, grow, and develop into responsible and engaged citizens. We offer a comprehensive academic program that is tailored to meet the needs and abilities of each student, with a focus on developing critical thinking, problem-solving, and collaboration skills.

                        At our primary school, we believe that learning should be fun and engaging. We provide a range of extracurricular activities and programs that allow students to explore their interests and develop their talents, including sports, music, art, and drama.

                        We also recognize the importance of social and emotional development in the growth of our students. Our school has a strong student support team that provides counseling, mentoring, and other services to help our students succeed both academically and personally.

                        Our primary school has a dedicated and experienced team of teachers who are passionate about education and committed to providing the best possible learning experience for our students. We are proud of our school community, and we look forward to partnering with parents and families to support our students in achieving their full potential.

                        Please explore our website to learn more about our programs, activities, and services. We welcome your feedback and questions and hope to hear from you soon!</h1>
                </div>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default About;