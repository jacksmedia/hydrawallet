import logo from './hydra-logo.png';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E Pluribus Unum</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          It&apos;s dangerous to go alone, keep your wallets with us 
        </h2>
        <a
          className="App-link"
          href="https://jacks.media"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Jacks.Media
        </a>
      </header>
       <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
