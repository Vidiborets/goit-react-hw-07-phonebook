import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ 
      baseUrl: "https://61c73dbd903185001754737f.mockapi.io/" 
    }),
    tagTypes:["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "contacts",
      providesTags: ["Contact"],
    }),
    deleteContacts:builder.mutation({
        query:(contactId)=>({
            url: `contacts/${contactId}`,
            method:"DELETE"
        }),
        invalidatesTags: ["Contact"],
    }),
    createContacts:builder.mutation({
        query:(newContact)=>({
            url:"contacts",
            method:"POST",
            body:newContact,
        }),
        invalidatesTags:["Contact"],
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDeleteContactsMutation,useCreateContactsMutation,useGetContactsQuery } = contactsApi