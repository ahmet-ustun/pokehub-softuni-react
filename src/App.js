import './App.css';

import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="sidenav" className="nes-container with-title is-centered is-dark">
        <p className="title">PokeDex</p>
      </div>
    </div>
  );
}

export default App;
