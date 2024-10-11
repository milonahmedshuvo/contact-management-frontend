'use client'



const error = ({error, reset } ) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-red-500 font-bold text-3xl ">Someting went rong</p>

      <p className="text-red-500 font-bold text-3xl ">{error.message}</p>
      
      <button
        className="bg-red-500 text-white font-semibold px-10 py-1 rounded-md my-4"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
  
}

export default error