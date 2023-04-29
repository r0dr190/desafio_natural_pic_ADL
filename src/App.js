import './App.css';
import { CtxProvider } from './context/ContextProvider';

function App() {
  return (
    <div className="App">
      <h1>Desafío Natural Pic</h1>
          <CtxProvider/>
    </div>
  );
}

export default App;
