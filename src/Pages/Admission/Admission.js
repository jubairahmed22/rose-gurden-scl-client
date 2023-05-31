import React from 'react';
import './Admission.css'
import Footer from '../Shared/Footer';
import { useForm } from 'react-hook-form';

const Admission = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = "4ec96bac20d60fff02cfb0ebf74274d3";
    console.log(imageHostKey);

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
                    const seller = {

                        firstName: data.FirstName,
                        LastName: data.LastName,
                        price: data.price,
                        fathersName: data.FathersName,
                        mothersName: data.MothersName,
                        phone: data.Phone,
                        email: data.Email,
                        address: data.Address,
                        description: data.description,
                        admission: data.AdmissionClass,
                        img: imgData.data.url

                    }
                    console.log(seller);

                    fetch('http://localhost:8000/admissions', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(seller)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                alert('Admission Complete Successfully')



                            }

                        })



                }
                //save info


            })
            .catch(error => console.error(error))





    }

   const handlePrint = () => {
        const printContents = document.getElementById('admissionForm').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      };

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

                        <div  className=''>
                            <div className=' inline-flex items-center mainWidth'>
                                <img className='' src='https://i.ibb.co/gymTzzj/rose-new-png-1.png' alt=''></img>
                                <div className='ml-5'>
                                    <h1 className='mainHeading'>Rose Garden Preparatory School</h1>
                                    <p className='mainPera'>Semi English Medium School</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3'>
                            <div className='w-full col-span-2 p-7'>
                                <form onSubmit={handleSubmit(handleAddProduct)}>


                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text">First Name</span> </label>
                                        <input type="model name"  {...register("FirstName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full" />
                                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control  w-full ">
                                        <label className="label"> <span className="label-text">Last Name</span> </label>
                                        <input type="model name"  {...register("LastName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text">Age</span> </label>
                                        <input type="price"  {...register("Age", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text">Fathers Name</span> </label>
                                        <input type="Year"  {...register("FathersName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text">Mothers Name</span> </label>
                                        <input type="Publisher"  {...register("MothersName", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text">Phone Numbers</span> </label>
                                        <input type="id"  {...register("Phone", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className=" form-control w-full ">
                                        <label className="label"> <span className="label-text">Email</span> </label>
                                        <input type="email"  {...register("Email", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>

                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text">Address</span> </label>
                                        <input type="description"  {...register("Address", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text">Class in which admission is sought</span> </label>
                                        <input type="description"  {...register("AdmissionClass", {
                                            required: "Name is Required"
                                        })} placeholder="Type here" className="input input-bordered w-full " />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full print:hidden">

                                        <div className='mt-5'>
                                            <h2>Upload Photo</h2>
                                            <input type="file" {...register("img", {
                                                required: "file is Required"
                                            })} className="file-input file-input-bordered file-input-primary mt-5 w-full " />
                                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                        </div>
                                    </div>
                                    <button className='print:hidden btn btn-primary w-full mt-5' onClick={handlePrint}>Print</button>

                                    <input className='print:hidden btn btn-primary w-full mt-5'  value='Submit' type="submit" />
                                </form>
                            </div>
                            <div className='w-full mt-20 h-56  '>
                                <div className='bg-gray-200 boxPhoto'>
                                    <h1>Your Photo</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Admission;