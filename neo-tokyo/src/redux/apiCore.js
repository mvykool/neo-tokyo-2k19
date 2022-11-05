import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const apiCore = createApi({
        reducerPath: 'apiCore',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://manga-scraper-for-mangakakalot-website.p.rapidapi.com/',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '8cdfbab5b0mshb1d20180d87119ep1ad4dcjsnd919c03de762');
                headers.set('X-RapidAPI-Host', 'manga-scraper-for-mangakakalot-website.p.rapidapi.com');
    
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getPopular: builder.query({ query: () => '/popular' }),
        }),
    });
    
    export const {
        useGetPopularQuery,
    } = apiCore;