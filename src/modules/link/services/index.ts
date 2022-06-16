import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LinkCreateType, LinkType } from '../store/types/link.type'

export const linkApi = createApi({
    tagTypes: ['Link'],
    reducerPath: 'linkApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030' }),
    endpoints: (builder) => ({
        getLink: builder.query<LinkType[], void>({
            query: () => `/link`,
            providesTags: ['Link']
        }),
        createLink: builder.mutation<LinkCreateType, LinkCreateType>({
            query: (link) => ({
                url: '/link',
                method: 'POST',
                body: link
            }),
            invalidatesTags: ['Link']
        }),
        updateLink: builder.mutation<LinkType, LinkType>({
            query: (link) => ({
                url: `/link/${link._id}`,
                method: 'PATCH',
                body: link
            }),
            invalidatesTags: ['Link']
        }),
        deleteLink: builder.mutation<LinkType, LinkType>({
            query: (link) => ({
                url: `/link/${link._id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Link']
        }),
    }),
})

export const { useGetLinkQuery, useCreateLinkMutation, useUpdateLinkMutation, useDeleteLinkMutation } = linkApi