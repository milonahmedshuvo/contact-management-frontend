
'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast";





export default function UpdateContact({ item }) {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset } = useForm()












    // start add animal 
    const onSubmit = async (data) => {
        // console.log(data)
        // console.log(item)
        const updateInfo = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address
        }
        


        try {
            const res = await fetch(`https://neutronltdtask-backend.vercel.app/api/v1/contact/update/${item._id}`, {
               method: 'PATCH',
               headers: {
                'content-type': 'application/json',
               },
               body: JSON.stringify(updateInfo)
            } )

            const data = await res.json()


        

        if(data.success) {
            toast.success('succesfully update contact!!')
            reset()
        }

        } catch (error) {
           toast.error('Filed update contact!!')
        }


    }







    return (
        <div className="flex justify-center ">

            <button
                className="bg-blue-500 border  text-md text-white px-6 py-1  transition rounded "
                onClick={() => setShowModal(true)}
            >
                update
            </button>




            {/* Modal */}
            {showModal ? (
                <div className="fixed inset-0 flex justify-center items-center bg-blue-500 bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Add Contact</h2>
                            <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </button>
                        </div>






                        <div>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none"
                                    placeholder="Enter animal name"

                                    {...register('name')}
                                />



                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    email
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none"
                                    placeholder="Enter animal name"

                                    {...register('email')}
                                />



                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    phoneNumber
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none"
                                    placeholder="Enter animal name"

                                    {...register('phoneNumber')}
                                />


                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    address
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none"
                                    placeholder="Enter animal name"

                                    {...register('address')}
                                />




                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full transition">
                                    Submit
                                </button>

                            </form>
                        </div>


                    </div>
                </div>
            ) : null}
        </div>
    );
}