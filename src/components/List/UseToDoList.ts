// hooks/useTodoList.ts
import { useSelector } from 'react-redux';
import { RootState } from '../../store/todo';

export const useTodoList = () => {
    return useSelector((state: RootState) => state.todo.list);
};
