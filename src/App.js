import AddTodo from './components/addTodo/addTodo';
import Navegation from './components/navegation/Navegation';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <Navegation />
      <AddTodo />
    </div>
  );
}

export default App;
