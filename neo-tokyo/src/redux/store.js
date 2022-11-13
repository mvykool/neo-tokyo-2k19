import { configureStore } from '@reduxjs/toolkit';

import { apiCore } from './apiCore';
import genreReducer from './genreSlice';

export const store = configureStore({
    reducer: {
        [apiCore.reducerPath]: apiCore.reducer,
        genre: genreReducer,
      
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(apiCore.middleware),
});