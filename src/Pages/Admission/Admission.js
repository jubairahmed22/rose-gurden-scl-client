import React from 'react';
import './Admission.css'
import Footer from '../Shared/Footer';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Admission = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = "4ec96bac20d60fff02cfb0ebf74274d3";
    console.log(imageHostKey);
    const { user } = useContext(AuthContext);
    const email = user.email
    
    console.log(email);
    const formRef = useRef(null);
    const navigate = useNavigate()
    const handleAddProduct = data => {
        
        // event.preventDefault();
        // const form = event.target;




        const image = data.img[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    // const randomstring = require('randomstring');
                    const seller = {

                        id:  Math.floor(Math.random() * 100000000).toString(),
                        firstName: data.FirstName,
                        LastName: data.LastName,
                        price: data.price,
                        fathersName: data.FathersName,
                        mothersName: data.MothersName,
                        phone: data.Phone,
                        email: data.email,
                        address: data.Address,
                        NewDate: new Date().toLocaleDateString(),
                        description: data.description,
                        admission: data.AdmissionClass,
                        img: imgData.data.url

                    }
                    console.log(seller);

                    fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(seller)
                    })
                        .then(res => res.json())
                        .then(data => {
                            
                            if (data.acknowledged) {
                                alert('Admission Complete Successfully')

                                formRef.current.reset();
                                navigate(`/admissionDataPrint`)

                            }

                        })



                }
                //save info


            })
            .catch(error => console.error(error))





    }

//    const handlePrint = () => {
//         const printContents = document.getElementById('admissionForm').innerHTML;
//         const originalContents = document.body.innerHTML;
//         document.body.innerHTML = printContents;
//         window.print();
//         document.body.innerHTML = originalContents;
//       };
     
    return (
        <div>
            <div  className='AdmissionAllBackground'>
                <div className='max-w-[1150px] mx-auto '>
                    {/* <h1 className="ContactHeadingMainOne text-left pt-48 lg:mt-20"><span className='text-orange-500'>Let's</span> get in touch!</h1> */}
                    <div className='max-w-[1090px] mx-auto'>
                        <div className='pt-72'>
                            <div className='boxTeacher '>
                                <h1 className='AdmissionLibrary pl-5 pt-1'>Admission Procedure</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1090px] mx-auto p-5 admissionBox mt-10'>
                <h1 className='admissionTxt'>Admission Notice</h1>
                <hr className='line'></hr>
                <p className='admissionPera'>Interested parents enquire about Admission details by visiting the Front Office or approaching through school mail or contacting directly to the Admission Department. In the case of PG and Nursery bulk admission, an SMS is sent to all Parents of Playpen.
                    Applications for the current year are accepted if there is available space.</p>
            </div>
            
            <div   className='max-w-[1090px] mx-auto p-5 admissionBox mt-10'>
                <h1 className='admissionTxt'>Admission Form</h1>
                <hr className='line'></hr>
                {/* admission form start  */}
                <div>
                    <div id="admissionForm" className='m-5 p-5 border-2'>

    
                        <div className=''>
                            <div className='w-full p-7 px-32'>
                                <form ref={formRef} onSubmit={handleSubmit(handleAddProduct)}>


                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text admissionPera">First Name</span> </label>
                                        <input type="model name"  {...register("FirstName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered  w-full" />
                                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control  w-full ">
                                        <label className="label"> <span className="label-text admissionPera">Last Name</span> </label>
                                        <input type="model name"  {...register("LastName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text admissionPera">Age</span> </label>
                                        <input type="price"  {...register("Age", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text admissionPera">Fathers Name</span> </label>
                                        <input type="Year"  {...register("FathersName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text admissionPera">Mothers Name</span> </label>
                                        <input type="Publisher"  {...register("MothersName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text admissionPera">Phone Numbers</span> </label>
                                        <input type="id"  {...register("Phone", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text admissionPera">Address</span> </label>
                                        <input type="description"  {...register("Address", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>

                                    <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text admissionPera">Class in which admission is sought</span>
                                    </label>
                                    <select {...register("AdmissionClass", {
                                        required: "class is Required"
                                    })} className="select select-bordered w-full">
                                        <option value="">Select Class Name</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                                </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text admissionPera">Email</span> </label>
                                        <input type="description"  {...register("email", {
                                            required: "email is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full print:hidden">

                                        <div className='mt-5'>
                                            <h2>Upload Photo</h2>
                                            <input type="file" {...register("img", {
                                                required: "file is Required"
                                            })} className="file-input file-input-bordered buttons mt-5 w-full " />
                                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                        </div>
                                    </div>
                                    {/* <button className='print:hidden btn btn-primary w-full mt-5' onClick={handlePrint}>Print</button> */}
                                    {/* <Link to='/admissionDataPrint'><button className='btn btn-primary mt-5 w-full'>View and print</button></Link> */}
                                    <input className='print:hidden btn buttons w-full mt-5'  value='Submit' type="submit" />
                                </form>
                            </div>
                            {/* <div className='w-full mt-20 h-56  '>
                                <div className='bg-gray-200 boxPhoto'>
                                    <h1>Your Photo</h1>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
               
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Admission;