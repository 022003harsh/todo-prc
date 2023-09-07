import { configureStore } from '@reduxjs/toolkit';
import Todoslice from '../Redux/Slices/Todoslice';

const store = configureStore({
  reducer: {
    todos: Todoslice,
  },
});

export default store;