'use client'
import { addFavourite } from '@/redux/features/favourite/favouriteSlice'
import {useState} from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'



const FavouriteIcon = ({item}) => {
      const [toggle, setToggle] = useState(true)
      const dispatch = useDispatch()


   
    const handleFavourite = () => {
        
        setToggle(!toggle)

        if(toggle=== true){
            
            dispatch(addFavourite(item))

            toast.success('This contact add favourite list!!')
        }
    }



    return (
        <div onClick={handleFavourite} >
            {
                toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            }
        </div>
    )
}

export default FavouriteIcon