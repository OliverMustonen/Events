import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Todos from './views/Todos';
import TodoDetails from './views/TodoDetails';
import CreateTodo from './components/CreateTodo';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <CreateTodo />
        <Routes>
          <Route exact path='/' element={<Todos/>}/>
          <Route exact path='/todos' element={<Todos/>}/>
          <Route exact path='/todos/:id' element={<TodoDetails/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
   
  );
}

export default App;
