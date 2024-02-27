import style from './List.module.css';
import Item from './Item';
import { useTodoList } from './UseToDoList';

export default function List() {
    const list = useTodoList();

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
