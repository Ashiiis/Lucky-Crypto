import React, { useState } from 'react';
import Web3 from 'web3';
import metamaskLogo from './metamask.svg'; // Assuming you have a MetaMask image in your assets folder
import './WalletConnect.css'; // Import the CSS file

function WalletConnect({ onWalletConnected }) {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setWalletAddress(accounts[0]);
        onWalletConnected(accounts[0]);
      } catch (error) {
        console.error("User denied account access...");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="container">
      {!walletAddress ? (
        <>
          <h1 className="heading">Hi there, let's connect your account first</h1>
          <div className="box">
            <img src={metamaskLogo} alt="MetaMask" className="logo" />
            <button onClick={connectWallet} className="button">
              Connect Wallet
            </button>
          </div>
          <p className="description">
            MetaMask is a crypto wallet that allows you to interact with the Ethereum blockchain.
          </p>
        </>
      ) : (
        <div className="connected">
          <h1 className="heading">Connected</h1>
          <p className="address">Wallet Address: {walletAddress}</p>
          {/* You can add additional functionality or buttons here */}
        </div>
      )}
    </div>
  );
}

export default WalletConnect;
