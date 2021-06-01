import logo from './hydra-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It&apos;s dangerous to go alone, keep your wallets with us 
        </p>
        <a
          className="App-link"
          href="https://jacks.media"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Jacks.Media
        </a>
      </header>
    </div>
  );
}

export default App;
