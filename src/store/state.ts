import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListItem {
    id: number;
    content: string;
}
export interface ListState {
    list: ListItem[];
    nextId: number;
}

const initialState: ListState = {
    list: [
        { id: 1, content: 'list1' },
        { id: 2, content: 'list2' },
    ],
    nextId: 3,
};

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        appendItem: (state: { list: { id: any; content: any }[]; nextId: number }, action: PayloadAction<string>) => {
            state.list.push({ id: state.nextId, content: action.payload });
            state.nextId += 1;
        },
        removeItem: (state: { list: any[] }, action: PayloadAction<number>) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
    },
});

export const { appendItem, removeItem } = todoListSlice.actions;
export default todoListSlice.reducer;
