import { configureStore } from '@reduxjs/toolkit';

import { apiCore } from './apiCore';

export const store = configureStore({
    reducer: {
        [apiCore.reducerPath]: apiCore.reducer,
      
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(apiCore.middleware),
});