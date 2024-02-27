// hooks/todoHooks.ts
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/state';

export const useRemoveItem = () => {
    const dispatch = useDispatch();

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    return handleRemoveItem;
};
