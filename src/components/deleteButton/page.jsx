'use client';
import toast from "react-hot-toast";

 





const DeleteButton = ({ contactId }) => {
 

    

  const handleDelete = async () => {

    
    if (confirm('Are you sure you want to delete this contact?')) {

      try {
        const response = await fetch(`https://neutronltdtask-backend.vercel.app/api/v1/contact/delete/${contactId}`, {
          method: 'DELETE',
        });



        if (response.ok) {

          toast.success('Contact deleted successfully')
        } else {
          console.error('Failed to delete contact');
        }

      } catch (error) {
        console.error('Error:', error);
      } 
    }



  };





  return (
    <button
      onClick={handleDelete}
      className='bg-red-500 text-white px-4 py-1 rounded'
    >
      Delete
    </button>
  );
};

export default DeleteButton;
