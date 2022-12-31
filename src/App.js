import Navegation from './components/navegation/Navegation';
import Sections from './components/sections/Sections';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <Navegation />
      <Sections />
      <div className='App_divAuthor'>
        <div>
          <p className='App_p'>created by <a className='App_a' href='https://github.com/villalb4' target='_blank'>villalb4</a> - devChallenges.io</p>
        </div>
      </div>
    </div>
  );
}

export default App;
