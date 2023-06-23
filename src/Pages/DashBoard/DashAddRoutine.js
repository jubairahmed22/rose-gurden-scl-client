import React, { useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './DashAddRoutine.css'



const DashAddRoutine = () => {
  // const [file, setFile] = useState()

  // function handleFile(event){
  //     setFile(event.target.files[0])
  //     console.log(event.target.files[0]);
  // }

  // function handleUpload() {
  //     const formData = new FormData();
  //     formData.append('file', file);

  //     const apiUrl = 'https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addRoutine'; // Replace 'https://your-api-url.com' with the actual URL of your API endpoint

  //     fetch(apiUrl, {
  //       method: "POST",
  //       body: formData
  //     })
  //       .then(response => response.json())
  //       .then(result => {
  //         console.log('success', result);
  //       })
  //       .catch(error => {
  //         console.error("Error", error);
  //       });
  //   }
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

      One: data.one,
      Two: data.two,
      Three: data.three,
      Four: data.four,
      Five: data.five,
      Six: data.six,
      Seven: data.seven,
      Eight: data.eight,
      Nine: data.nine,
      Ten: data.ten,
      OneExam: data.oneExam,
      TwoExam: data.twoExam,
      ThreeExam: data.threeExam,
      FourExam: data.fourExam,
      FiveExam: data.fiveExam,
      SixExam: data.sixExam,
      SevenExam: data.sevenExam,
      EightExam: data.eightExam,
      NineExam: data.nineExam,
      TenExam: data.tenExam,
      NewDate: new Date().toLocaleDateString(),
      classOne: "one",
      classTwo: "Two",
      classThree: "Three",
      classFour: "Four",
      classFive: "Five",
      classSix: "Six",
      classSeven: "Seven",
      classEight: "Eight",
      classNine: "Nine",
      classTen: "Ten",

    }
    console.log(seller);

    fetch('https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/addRoutine', {
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
  //save info
  return (
    <div className=' '>
      {/* <h1 className='text-center font-2xl'>Add routine</h1>
            <form onSubmit={handleUpload} accept="application/pdf" >
                <input type='file' onChange={handleFile}></input>
            <button  >Upload</button>
            </form> */}
      {/* Add pdf form */}
      <div className='p-5 dashBackground'>

        <h1 className='text-4xl font-bold text-center mainText title pt-5'>Add Routine</h1>
        <div className='mainItem'>
          <div className=''>
            <form onSubmit={handleSubmit(handleAddProduct)} ref={formRef}>

              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class One</span> </label>
                  <input type="Class One"  {...register("one", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("oneExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>

              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Two</span> </label>
                  <input type="class Two"  {...register("two", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>

                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("twoExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Three</span> </label>
                  <input type="Class Three"  {...register("three", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("threeExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Four</span> </label>
                  <input type="Class Four"  {...register("four", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("fourExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Five</span> </label>
                  <input type="Class Five"  {...register("five", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("fiveExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Six</span> </label>
                  <input type="class six"  {...register("six", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("sixExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Seven</span> </label>
                  <input type="class seven"  {...register("seven", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("sevenExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Eight</span> </label>
                  <input type="Class Eight"  {...register("eight", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("eightExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Nine</span> </label>
                  <input type="Class Nine"  {...register("nine", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("nineExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className='flex'>
                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Class Ten</span> </label>
                  <input type="Class Ten"  {...register("ten", {
                    required: "Link is Required"
                  })} placeholder="Google Drive Link" className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
                <div className="form-control ml-5 w-full max-w-xs">
                  <label className="label"> <span className="label-text mainText">Exam Name</span> </label>
                  <input type="Exam Name"  {...register("tenExam", {
                    required: "Name is Required"
                  })} placeholder="Type Here" className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.name.message}</p>}

                </div>
              </div>
              <div className="form-control w-full max-w-xs">
              </div>

              <input className='btn buttons w-full  mt-5' value='Add Routine' type="submit" />


            </form>
          </div>


        </div>
      </div>
      {/* Add pdf end */}
    </div>
  );
};

export default DashAddRoutine;