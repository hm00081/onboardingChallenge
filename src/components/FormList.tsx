import style from './FormList.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { appendItem } from '../store/state';

export default function FormList() {
    const dispatch = useDispatch();
    const inputRef = React.createRef<HTMLInputElement>();

    const appendHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            const content = inputRef.current.value.trim();
            if (content) {
                dispatch(appendItem(content));
                inputRef.current.value = '';
            }
        }
    };

    return (
        <form className={style.form} onSubmit={appendHandler}>
            <input className={style.input} ref={inputRef} placeholder="input your todoList" title="input"></input>
            <button className={style.add} title="add">
                Add
            </button>
        </form>
    );
}
