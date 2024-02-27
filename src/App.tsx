import style from './App.module.css';
import FormList from './components/FormList';
import List from './components/List/List';

function App() {
    return (
        <div className={style.app}>
            <FormList />
            <List />
        </div>
    );
}

export default App;
