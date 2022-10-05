import { configureStore } from '@reduxjs/toolkit';

import selectedModalReducer from './slices/selectedModalSlice';
import paginationReducer from './slices/paginationSlice';

export const store = configureStore({
  reducer: {
    selectedModal: selectedModalReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
