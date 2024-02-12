import logo from './logo.svg';
import './App.css';
import DinoGame from 'react-chrome-dino-ts'
import 'react-chrome-dino-ts/index.css'

function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}> Chrome Dino Game </h1>
      <div>
        <DinoGame/>
      </div>

    </div>
  );
}

export default App;
