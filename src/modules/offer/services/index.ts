import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { offerSlice } from '../store'
import { OfferCreateType, OfferType } from '../store/types/offer.type'


export const offerApi = createApi({
    tagTypes: ['Offer'],
    reducerPath: 'linkApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api' }),
    endpoints: (builder) => ({
        getOffer: builder.query<OfferType[], void>({
            query: () => `/offer`,
            providesTags: ['Offer']
        }),
        createOffer: builder.mutation<OfferCreateType, OfferCreateType>({
            query: (offer) => ({
                url: '/offer',
                method: 'POST',
                body: offer
            }),
            invalidatesTags: ['Offer']
        }),
        updateOffer: builder.mutation<OfferType, OfferType>({
            query: (offer) => ({
                url: `/offer/${offer._id}`,
                method: 'PATCH',
                body: offer
            }),
            invalidatesTags: ['Offer']
        }),
        deleteOffer: builder.mutation<OfferType, OfferType>({
            query: (offer) => ({
                url: `/offer/${offer._id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Offer']
        }),
    }),
})

export const { useGetOfferQuery, useCreateOfferMutation, useUpdateOfferMutation, useDeleteOfferMutation } = offerApi