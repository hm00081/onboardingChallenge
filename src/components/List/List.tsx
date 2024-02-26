import style from './List.module.css';
import Item from './Item';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/todo';

export default function List() {
    const list = useSelector((state: RootState) => state.todo.list);

    return (
        <div className={style.wrapper}>
            <div className={style.list}>
                {list.map(({ id, content }) => (
                    <Item key={id} id={id} content={content} />
                ))}
            </div>
        </div>
    );
}
