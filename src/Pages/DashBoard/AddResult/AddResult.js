import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './AddResult.css'
import { useState } from 'react';
import { Spinner } from 'flowbite-react';

const AddResult = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [query, setQuery] = useState("");

    const students = useLoaderData();
    console.log(students);

    const formRef = useRef(null);
    const navigate = useNavigate()
    const handleAddProduct = data => {


        const seller = {


            id: data.id,
            exam: data.exam,
            class: data.AdmissionClass,
            subject: data.subject,
            number: data.number,
            date: new Date().toLocaleDateString(),



        }
        console.log(seller);

        fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/ExamResult', {
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
                    alert('Exam Result Placed Successfully');
                    formRef.current.reset();
                    // navigate(`/examinations`)
                }
            })

    }
    return (
        <div>
            <div className='ResultbackGround h-full  p-5 '>

                <h1 className='text-3xl font-bold text-center text-white title pt-5'>Add Exam Result</h1>
                <div className=''>
                    <div className='w-full p-7'>
                        <div className="">
                            <h1 className='pb-5 pl-2 text-lg text-white '>Our Students</h1>
                            <div className='flex items-center justify-center '>

                                <h1 className='text-lg text-white '>Search Id</h1>
                                <input type="text"
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search" className="shadow-2xl input input-bordered input-primary w-full max-w-2xl m-10 " />

                            </div>
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
                        <div className='formMjr'>
                            <form className='mt-20 ' onSubmit={handleSubmit(handleAddProduct)} ref={formRef}>

                                <div className='flex'>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-lg text-white ">Student ID</span> </label>
                                        <input type="id"  {...register("id", {
                                            required: "id is Required"
                                        })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>

                                    <div className="form-control w-full max-w-xs ml-5">
                                        <label className="label">
                                            <span className="text-lg text-white max-w-xs">Exam Name</span>
                                        </label>
                                        <select {...register("exam", {
                                            required: "class is Required"
                                        })} className="select select-bordered w-full">
                                            <option value="">Select Exam Name</option>
                                            <option value="mid-exam-1">mid exam 1</option>
                                            <option value="final-exam-1">final exam 1</option>
                                            <option value="mid-exam-2">mid exam 2</option>
                                            <option value="final-exam-2">final exam 2</option>
                                            <option value="mid-exam-3">mid exam 3</option>
                                            <option value="final-exam-3">final exam 3</option>

                                            {/* Add more options as needed */}
                                        </select>
                                        {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="form-control  w-full max-w-xs">
                                        <label className="label"> <span className="text-lg text-white ">Update Students Result</span> </label>
                                        <input type="number"  {...register("number", {
                                            required: "number is Required"
                                        })} placeholder="type here" className="input input-bordered  " />
                                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                                    </div>
                                    <div className="form-control w-full max-w-xs ml-5">
                                        <label className="label">
                                            <span className="text-lg text-white max-w-xs">subject Name</span>
                                        </label>
                                        <select {...register("subject", {
                                            required: "class is Required"
                                        })} className="select select-bordered w-full">
                                            <option value="">Select Exam Name</option>
                                            <option value="physics">Physics</option>
                                            <option value="chemistry">Chemistry</option>
                                            <option value="biology">Biology</option>
                                            <option value="math">Math</option>
                                            <option value="english">English</option>
                                            <option value="accounting">Accounting</option>
                                            <option value="socialScience">Social Science</option>

                                            {/* Add more options as needed */}
                                        </select>
                                        {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                                    </div>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="text-lg text-white ">Class in which admission is sought</span>
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
                                <input className='btn buttons w-full mt-5' value='Add Exam Result' type="submit" />

                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddResult;