import style from './App.module.css';
import FormList from './components/FormList';
import List from './components/List/List';

function App() {
    return (
        <div className={style.app}>
            <h1 className={style.title}>todo-list</h1>
            <FormList />
            <List />
        </div>
    );
}

export default App;
