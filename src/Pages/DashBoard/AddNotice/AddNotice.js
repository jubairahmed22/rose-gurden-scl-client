import React, { useRef } from 'react';
import './AddNotice.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddNotice = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const formRef = useRef(null);
    const navigate = useNavigate()
    const handleAddProduct = data => {






        // event.preventDefault();
        // const form = event.target;




        // const image = data.img[0];
        // console.log(image);
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=4ec96bac20d60fff02cfb0ebf74274d3`
        // fetch(url, {
        //   method: 'POST',
        //   body: formData
        // })
        //   .then(res => res.json())
        //   .then(imgData => {
        //     if (imgData.success) {
        //       console.log(imgData.data.url);


        const seller = {

            id: Math.floor(Math.random() * 100000000).toString(),
            name: data.name,
            noticeTo: data.noticeTo,
            noticeHeading: data.noticeHeading,
            noticeMain: data.noticeMain,
            noticeEnd: data.noticeEnd,
            noticeFromName: data.noticeFromName,
            NoticeFromSubname: data.NoticeFromSubname,


            date: new Date().toLocaleDateString(),


        }
        console.log(seller);

          fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addNotice', {
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
                alert('Routine Placed Successfully');
                formRef.current.reset();
                navigate(`/examinations`)
              }
            })
    }
    return (
        <div>
            <div className=' p-5 mainColor'>

                <h1 className='text-4xl font-bold text-center text-white title pt-5'>Add Notice</h1>
                <div className=''>
                    <div className='w-full p-7'>
                        <form onSubmit={handleSubmit(handleAddProduct)} ref={formRef}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text text-white text-white">noticeTo</span> </label>
                                <input type="noticeTo"  {...register("noticeTo", {
                                    required: "noticeTo is Required"
                                })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>

                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text text-white text-white">Subject</span> </label>
                                <input type="title"  {...register("name", {
                                    required: "Title is Required"
                                })} placeholder="type here" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>




                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text text-white text-white">Notice Heading</span> </label>
                                <input type="noticeHeading"  {...register("noticeHeading", {
                                    required: "noticeHeading is Required"
                                })} placeholder="type here" className="input input-bordered w-full h-20" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>

                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text text-white text-white">Notice Main</span> </label>
                                <input type="noticeMain"  {...register("noticeMain", {
                                    required: "noticeMain is Required"
                                })} placeholder="Type Here" className="input input-bordered w-full h-32" />
                                {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>


                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text text-white text-white">Notice End</span> </label>
                                <input    type="noticeEnd"  {...register("noticeEnd", {
                                    required: "noticeEnd is Required"
                                })} placeholder="type here" className="input input-bordered w-full " />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>
                            <div className="form-control  w-full max-w-xs">
                                <label className="label"> <span className="label-text text-white text-white">notice From Name</span> </label>
                                <input type="notice From Name"  {...register("noticeFromName", {
                                    required: "Name is Required"
                                })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text text-white text-white">Notice From Subname</span> </label>
                                <input type="NoticeFromSubname"  {...register("NoticeFromSubname", {
                                    required: "NoticeFromSubname is Required"
                                })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>




                            <div className="form-control w-full max-w-xs">
                            </div>
                            <input className='btn buttons w-full mt-5' value='Add Notice' type="submit" />

                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddNotice;