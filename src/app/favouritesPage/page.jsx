'use client'

import Image from "next/image";

const { useSelector } = require("react-redux")


const FavouritePage = () => {
  const favourite = useSelector((state) => state.favourite.favouriteItems)




  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 place-content-center gap-10 mt-10'>
      {
        favourite.map((item) => <div key={item._id}>
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

            <div>
              <p> {item.name} </p>
              <p> {item.email} </p>
              <p> {item.address} </p>
              <p> {item.phoneNumber} </p>
            </div>


          </div>
        </div>)
      }

    </div>
  )

}

export default FavouritePage;