import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listWallets } from './graphql/queries';
import { createWallet as createWalletMutation, deleteWallet as deleteWalletMutation } from './graphql/mutations';
import logo from './hydra-logo.png';

const initialFormState = { address: '', memo: '', crypto: '' }

function App() {
  const [wallets, setWallets] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchWallets();
  }, []);

  async function fetchWallets() {
    const apiData = await API.graphql({ query: listWallets })
    setWallets(apiData.data.listWallets.items);
  }

  async function createWallet() {
    if (!formData.address || !formData.memo) return;
    await API.graphql({ query: createWalletMutation, variables: { input: { formData }} });
    setWallets([ ...wallets, formData ]);
    setFormData(initialFormState);
  }

  async function deleteWallet({ id }) {
    const newWalletsArray = wallets.filter(wallet => wallet.id !== id);
    setWallets(newWalletsArray);
    await API.graphql({ query: deleteWalletMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h1>Hydra Wallet</h1>
        <div className="App-form">
          <input 
            onChange={e => setFormData({ ...formData, 'address': e.target.value})}
            placeholder={"Wallet address"}
            value={formData.address}
          />
          <input 
            onChange={e => setFormData({ ...formData, 'crypto': e.target.value})}
            placeholder={"Crypto/token/blockchain name"}
            value={formData.crypto}
          />
          <button onClick={createWallet}>Add New Wallet</button>
          <div style={{marginBottom: 25}}>
            {
              wallets.map(wallet => (
                <div key={wallet.id || wallet.address}>
                  <p>{wallet.address}</p>
                  <h2>{wallet.crypto}</h2>
                  <button onClick={() => deleteWallet(wallet)}>Delete</button>
                </div>
              ))
            }
          </div>
        </div>
        <h3>E Pluribus Unum</h3>
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
    </div>
  );
}

export default withAuthenticator(App);
