import style from './FormList.module.css';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { appendItem } from '../store/state';

export default function FormList() {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

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
            <input className={style.input} ref={inputRef} placeholder="input your todoList" title="input" aria-label="todo input"></input>
            <button className={style.add} type="submit" title="add">
                Add
            </button>
        </form>
    );
}
