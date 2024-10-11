import Link from 'next/link'

export default function NotFound() {
    return (
        <div >
            <div className='flex flex-col justify-center items-center h-screen'>
                <h2 className='text-red-600 font-bold text-2xl'>Not Found</h2>
                <p>Could not find requested page</p>
                <Link href="/" className='text-blue-500 my-2'>Go to Home</Link>
            </div>
        </div>
    )
}