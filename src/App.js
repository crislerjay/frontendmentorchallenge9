import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import MainVisual from './Components/MainVisual';
import TodoContextProvider from './Contexts/TodoContext'

function App() {

  return (
    <div>
      <TodoContextProvider>
        <MainVisual />
        <div className='content'>
          <Header />
          <Form />
          <TodoList />
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
