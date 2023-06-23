import React from 'react';
import './AddBooks.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddBooks = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = "4ec96bac20d60fff02cfb0ebf74274d3";
    console.log(imageHostKey);

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

                        MainId: Math.floor(Math.random() * 100000000).toString(),
                        id: data.className,
                        subject: data.subject,
                        pdf: data.pdf,
                        NewDate: new Date().toLocaleDateString(),
                        img: imgData.data.url

                    }
                    console.log(seller);

                    fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/libraryDetails', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(seller)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.acknowledged) {
                                alert('New books Added')

                                formRef.current.reset();
                                navigate(`/library`)

                            }

                        })



                }
                //save info


            })
            .catch(error => console.error(error))





    }
    return (
        <div>
            <div>
                <div id="admissionForm" className=' p-5  mainColor h-screen'>

                    <h1 className='text-3xl font-bold text-center text-white'>Add Books</h1>

                    <div className=''>
                        <div className='w-full p-7 px-32'>
                            <form ref={formRef} onSubmit={handleSubmit(handleAddProduct)}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white  ">Class Name</span>
                                    </label>
                                    <select {...register("className", {
                                        required: "class is Required"
                                    })} className="select select-bordered w-full">
                                        <option value="">Select Class Name</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text text-white  ">Books Name</span> </label>
                                    <input type="model name"  {...register("subject", {
                                        required: "Name is Required"
                                    })} placeholder="Type here" className="input input-bordered  w-full" />
                                    {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                </div>
                                <div className="form-control  w-full ">
                                    <label className="label"> <span className="label-text text-white  ">Your PDF link</span> </label>
                                    <input type="model name"  {...register("pdf", {
                                        required: "Name is Required"
                                    })} placeholder="Type here" className="input input-bordered w-full " />
                                    {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                </div>

                 







                                <div className="form-control w-full print:hidden">

                                    <div className='mt-5'>
                                        <h2 className='text-white'>Upload Photo</h2>
                                        <input type="file" {...register("img", {
                                            required: "file is Required"
                                        })} className="file-input file-input-bordered buttons mt-5 w-full " />
                                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                    </div>
                                </div>
                                {/* <button className='print:hidden btn btn-primary w-full mt-5' onClick={handlePrint}>Print</button> */}
                                {/* <Link to='/admissionDataPrint'><button className='btn btn-primary mt-5 w-full'>View and print</button></Link> */}
                                <input className='print:hidden btn buttons w-full mt-5' value='Submit' type="submit" />
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
    );
};

export default AddBooks;