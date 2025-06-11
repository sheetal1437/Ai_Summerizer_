import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  
 const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi', baseQuery:fetchBaseQuery({ 
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers) =>{
            headers.set('X-RapidAPI-Key','53b9b5511bmsh5474b9abab36f1ap160e9bjsn2706943c87cc', rapidApiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com'); 

            return headers;
        }
        
    
    }),
    endpoints:(builder) =>({
        getSummary:builder.query({ 
        query:(params) => 'summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2'
    })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;