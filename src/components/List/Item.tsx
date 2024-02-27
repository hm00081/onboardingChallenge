import style from './Item.module.css';
import { ListItem } from '../../store/state';
import { useRemoveItem } from './UseRemoveItem';

export default function Item({ id, content }: ListItem) {
    const removeItem = useRemoveItem();

    return (
        <div className={style.item}>
            <div className={style.content}>{content}</div>
            <button className={style.delete} type="button" title="delete" onClick={() => removeItem(id)}>
                delete
            </button>
        </div>
    );
}
