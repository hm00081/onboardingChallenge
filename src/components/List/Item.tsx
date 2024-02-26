import style from './Item.module.css';
import { useDispatch } from 'react-redux';
import { ListItem, removeItem } from '../../store/state';

export default function Item({ id, content }: ListItem) {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(removeItem(id));
    };

    return (
        <div className={style.item}>
            <div className={style.content}>{content}</div>
            <button className={style.delete} type="button" title="delete" onClick={deleteHandler}>
                delete
            </button>
        </div>
    );
}
