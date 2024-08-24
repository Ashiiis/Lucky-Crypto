import React, { useState } from 'react';
import './CoinFlip.css'; // Import the CSS file
import CoinImage from './Coin.png'; 
function CoinFlip({ amount, walletAddress }) {
  const [result, setResult] = useState(null);
  const [bet, setBet] = useState(null);

  const flipCoin = () => {
    if (bet === null) {
      alert("Please choose Heads or Tails.");
      return;
    }
    const isHeads = Math.random() >= 0.5;
    const coinResult = isHeads ? 'Heads' : 'Tails';
    setResult({
      outcome: coinResult,
      win: coinResult === bet
    });
  };

  const handleBetChange = (choice) => {
    setBet(choice);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert('Wallet address copied to clipboard!');
  };

  return (
    <div className="coinflip-container">
      <h2 className="amount">Bet Amount: {amount} tokens</h2>
      <div className="wallet-box">
        <p>Wallet: {walletAddress}</p>
        <button onClick={copyToClipboard} className="copy-button">Copy</button>
      </div>
      <div className="coin-section">
      <img
          src={CoinImage} // Use the imported image
          alt="Coin"
          className="coin-image"
        />
        <div className="options">
          <h3>Choose Your Option:</h3>
          <button onClick={() => handleBetChange('Heads')} className={`bet-button ${bet === 'Heads' ? 'selected' : ''}`}>Heads</button>
          <button onClick={() => handleBetChange('Tails')} className={`bet-button ${bet === 'Tails' ? 'selected' : ''}`}>Tails</button>
        </div>
        <button onClick={flipCoin} className="flip-button">
          Let's Flip!
        </button>
      </div>
      {result && (
        <div className="result">
          <img
            src={result.outcome === 'Heads' ? '/heads.png' : '/tails.png'}
            alt={result.outcome}
            className="result-image"
          />
          <h3>{result.outcome}! {result.win ? 'You Win!' : 'You Lose!'}</h3>
        </div>
      )}
    </div>
  );
}

export default CoinFlip;
