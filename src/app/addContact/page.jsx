'use client'
import { useContactPostMutation } from "@/redux/api/contactApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from 'axios';





export default function AddContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [contactPost, {data, isSuccess, isError, error }] = useContactPostMutation()




  const onSubmit = async (data) => {


    const formData = new FormData();
     formData.append('image', data.profilePicture[0]);
    // console.log(data);


    
    try{
      const response = await axios.post('https://api.imgbb.com/1/upload?&key=1e1cb35e45fc37d4bfe6bd8a3ed195cc', formData, {
          params: { key: '1e1cb35e45fc37d4bfe6bd8a3ed195cc'},
          headers: {
              'Content-Type': 'multipart/form-data',
            },
      })

       
       const contact = {
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address: data.address,
          profilePicture: response.data.data.url
         }


         contactPost({
          data: contact
        })

      console.log("image upload success:", response.data.data.url)
      
     
      reset()
  } catch(err){
      console.log("error uploading image", err)
  }






    
  };


  if(isSuccess){
    toast.success("contact create success")
    console.log(data)
  }

  if(isError){
    toast.error("contact is create error")
    console.log(error)
  }






  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-medium mb-1">Email (optional)</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            {...register("phoneNumber", { required: "Phone number is required" })}
            type="text"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Address Field */}
        <div>
          <label className="block font-medium mb-1">Address</label>
          <input
            {...register("address", { required: "Address is required" })}
            type="text"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        {/* Profile Picture Field */}
        <div>
          <label className="block font-medium mb-1">Profile Picture (Upload or URL)</label>
          <input
            {...register("profilePicture", { required: "Profile picture is required" })}
            type="file"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter profile picture URL"
          />
          {errors.profilePicture && <p className="text-red-500 text-sm">{errors.profilePicture.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
