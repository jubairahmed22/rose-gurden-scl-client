import React from 'react';
import './AdmissionPrint.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Shared/Footer';

const AdmissionPrint = () => {
    const [admission, setAdmission] = useState([]);
    useEffect(() => {

        const url = 'https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions';


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setAdmission(data);
            })

    }, [])
    console.log(admission);

    const handlePrint = () => {
        const printContents = document.getElementById('admissionForm').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      };
    return (
        <div>

            <div id="admissionForm" className='max-w-[1090px] mt-10 p-10 mx-auto admissionPrintBox'>
                <div className=' boxDetails w-full'>
                    <div className='boxDetailsMain'>
                        <div className=' inline-flex items-center mainWidth'>
                            <img className='' src='https://i.ibb.co/gymTzzj/rose-new-png-1.png' alt=''></img>
                            <div className='ml-5'>
                                <h1 className='mainHeading'>Rose Garden Preparatory School</h1>
                                <p className='mainPera'>Semi English Medium School</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-5  '>
                    <h1 className='PrintMainHeading text-center'>Admission Details</h1>

                    <div className='grid grid cols-2 gap-5 '>
                        {
                            admission.reverse().slice(0, 1).map(ad =>
                                <div>
                                    <h1 className='PrintMainHeadingTwo text-center'>Posted Date: {ad.NewDate}</h1>

                                    <div className='mt-5 grid grid-cols-2 place-items-center px-10'>

                                        <div className=''>
                                            <div class="overflow-x-auto">
                                                <table class="table">

                                                    <tbody>

                                                        <tr>
                                                            <th className='text-2xl'>Students Name:</th>
                                                            <td className='text-2xl'>{ad.firstName} {ad.LastName}</td>

                                                        </tr>

                                                        <tr class="hover">
                                                            <th className='text-2xl'>Fathers Name:</th>
                                                            <td className='text-2xl'>{ad.fathersName}</td>

                                                        </tr>
                                                        <tr>
                                                            <th className='text-2xl'>Mothers Name:</th>
                                                            <td className='text-2xl'>{ad.mothersName}</td>

                                                        </tr>

                                                        <tr>
                                                            <th className='text-2xl'>Phone Number:</th>
                                                            <td className='text-2xl'>{ad.phone}</td>

                                                        </tr>
                                                        <tr>
                                                            <th className='text-2xl'>Email Address:</th>
                                                            <td className='text-2xl'>{ad.email}</td>

                                                        </tr>

                                                        <tr>
                                                            <th className='text-2xl'>Address:</th>
                                                            <td className='text-2xl'>{ad.address}</td>

                                                        </tr>
                                                        <tr>
                                                            <th className='text-2xl'>Class:</th>
                                                            <td className='text-2xl'>{ad.admission}</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div>
                                            <img className='imgMjrPrint mb-32' src={ad.img} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <button className='print:hidden btn buttons w-full mt-5' onClick={handlePrint}>Print</button>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdmissionPrint;