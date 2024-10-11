import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://neutronltdtask-backend.vercel.app/' }),
  endpoints: (builder) => ({

    contactPost: builder.mutation({
        query: (contactData) =>{
       
            console.log('redux data', contactData)

            return {
                url: '/api/v1/contact/create',
                method: 'POST',
                body : contactData
            }
          }
    }),
  }),
})





export const { useContactPostMutation } = contactApi