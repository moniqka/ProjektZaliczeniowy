import { api } from './api';

const API_KEY = 'k_ty5rk4gi';

export const videoApi = api.injectEndpoints({
  reducerPath: 'videoApi',
  endpoints: (build) => ({
    getVideo: build.query({
      query: ( searchTerm ) => ({
        method: 'GET',
        url: `en/API/SearchMovie/${API_KEY}/${searchTerm}`,
      }),
      providesTags: ['Absence'],
      transformResponse: (response) => response.results,
    }),
    getYtTrailer: build.query({
      query: () => ({
        method: 'GET',
        url: `imdb-api.com/en/API/YouTubeTrailer/${API_KEY}/tt0112573`,
      }),
      transformResponse: (response) => response.videoUrl,
    }),
      invalidatesTags: ['Absence']
    })
});

export const { useGetVideoQuery, useGetYtTrailerQuery } = videoApi;