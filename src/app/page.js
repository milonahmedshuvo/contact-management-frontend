import DeleteButton from "@/components/deleteButton/page";
import FavouriteIcon from "@/components/favourite/page";
import UpdateContact from "@/components/updateModal/page";
import Image from "next/image";


const Home = async () => {
  const res = await fetch('https://neutronltdtask-backend.vercel.app/api/v1/contact/all',
    {
      cache: 'no-store'
    }
  )
  const data = await res.json()

  




  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 place-content-center gap-10 mt-10 '>
      {
        data.data.map((item) => <div key={item._id}>
          <div>
            <div>
              <Image
                src={item.profilePicture}
                width={500}
                height={500}
                className='h-[250px]'
                alt="Picture of the author"
              />
            </div>
            <div className='mt-4 flex justify-between '>
             <div>
             <p> {item.name} </p>
              <p> {item.email} </p>
              <p> {item.address} </p>
              <p> {item.phoneNumber} </p>
             </div>

             <div>
              <FavouriteIcon item={item} ></FavouriteIcon>
             </div>
            </div>

            <div className='flex justify-between items-center mt-3'>
              <DeleteButton contactId={item._id} ></DeleteButton>

              <UpdateContact item={item} ></UpdateContact>
            </div>
          </div>
        </div>)
      }

    </div>
  );
}


export default Home