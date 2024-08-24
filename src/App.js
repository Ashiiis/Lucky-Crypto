import React, { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import AmountInput from './components/AmountInput';
import CoinFlip from './components/CoinFlip';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleWalletConnected = (address) => {
    setWalletAddress(address);
  };

  const handleAmountSubmit = (betAmount) => {
    setAmount(betAmount);
  };

  return (
    <div className="App">
      {!walletAddress ? (
        <WalletConnect onWalletConnected={handleWalletConnected} />
      ) : !amount ? (
        <AmountInput onSubmitAmount={handleAmountSubmit} />
      ) : (
        <CoinFlip amount={amount} walletAddress={walletAddress} />
      )}
    </div>
  );
}

export default App;
