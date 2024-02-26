import { configureStore } from '@reduxjs/toolkit';
import todo from './state';

const store = configureStore({
    reducer: {
        todo,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
