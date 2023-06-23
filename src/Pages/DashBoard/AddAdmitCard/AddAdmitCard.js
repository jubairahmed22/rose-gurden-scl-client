import React, { useRef, useState } from 'react';
import './AdAdmitCard.css'

import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { Spinner } from 'flowbite-react';


const AddAdmitCard = () => {
    const students = useLoaderData();
    const [query, setQuery] = useState("");

    console.log(students);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formRef = useRef(null);

    const handleAddProduct = data => {


        const seller = {


            id: data.id,
            exam: data.exam,
            class: data.AdmissionClass,
            pdf: data.pdf,
            date: new Date().toLocaleDateString(),



        }
        console.log(seller);

        fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addAdmitCard', {
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
                    alert('Admit Card Placed Successfully');
                    formRef.current.reset();

                }
            })

    }
    return (
        <div>
            <div className='  p-5 admitBackground h-full'>

                <h1 className='text-3xl font-bold text-center text-white title pt-5'>Add Admit Card</h1>
                <div className=''>
                    <div className='w-full p-7'>
                        <div className="">
                            <div className='flex items-center justify-center '>

<h1 className='text-lg text-white '>Search Id</h1>
<input type="text"
onChange={(e) => setQuery(e.target.value)}
placeholder="Search" className="shadow-2xl input input-bordered input-primary w-full max-w-2xl m-10 " />

</div>
<h1 className='pb-5 pl-2 text-lg text-white '>Our Students</h1>

                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>id</th>
                                        <th>email</th>
                                        <th>class</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.length === 0 ? <div><Spinner /></div> : students.filter((info) => info.id.toLowerCase().includes(query)).map(all =>
                                            <tr>
                                            <th></th>
                                            <th>{all.firstName} {all.LastName}</th>
                                            <td>{all.id}</td>
                                            <td>{all.email}</td>
                                            <td>{all.admission}</td>
                                          </tr>    
                                        )
                                    }

                                   


                                </tbody>
                            </table>
                        </div>
                        <form className='mt-20' onSubmit={handleSubmit(handleAddProduct)} ref={formRef}>

                          <div className='flex'>
                          <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="text-lg text-white ">Student ID</span> </label>
                                <input type="id"  {...register("id", {
                                    required: "id is Required"
                                })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>

                            <div className="form-control w-full ml-20">
                                <label className="label"> <span className="text-lg text-white ">Exam Name</span> </label>
                                <input type="title"  {...register("exam", {
                                    required: "Title is Required"
                                })} placeholder="type here" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>
                          </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="text-lg text-white ">Upload PDF link</span> </label>
                                <input type="pdf"  {...register("pdf", {
                                    required: "pdf is Required"
                                })} placeholder="type here" className="input input-bordered w-full " />
                                {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-white  ">Class in which admission is sought</span>
                                </label>
                                <select {...register("AdmissionClass", {
                                    required: "class is Required"
                                })} className="select select-bordered w-full">
                                    <option value="">Select Class Name</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4</option>
                                    <option value="3">5</option>
                                    <option value="3">6</option>
                                    <option value="3">7</option>
                                    <option value="3">8</option>
                                    <option value="3">9</option>
                                    <option value="3">10</option>
                                    {/* Add more options as needed */}
                                </select>
                                {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                            </div>
                            <input className='btn buttons w-full mt-5' value='Add Admit Card' type="submit" />

                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddAdmitCard;