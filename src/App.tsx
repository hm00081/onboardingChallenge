import style from './App.module.css';
import FormList from './components/FormList';
import TodoList from './components/List/List';

function App() {
    return (
        <main className={style.main}>
            <FormList />
            <TodoList />
        </main>
    );
}

export default App;
