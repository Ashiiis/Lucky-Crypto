import React, { useState } from 'react';
import './AmountInput.css'; 

function AmountInput({ onSubmitAmount }) {
    const [amount, setAmount] = useState('');

    const handleSubmit = () => {
        if (amount > 0) {
          onSubmitAmount(amount);
        } else {
          alert("Please enter a valid amount");
        }
      };

  return (
    <div className="container">
      <h1 className="heading">Enter Amount</h1>
      <div className="input-container">
        <label className="input-label" htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
          placeholder="Enter amount"
        />
      </div>
      <button onClick={handleSubmit} className="start-button">
        Start Game
      </button>
      <p className="game-rules">
        Game Rules: 
        <ul>
          <li>Enter the amount you wish to bet.</li>
          <li>If you win, you will receive double the amount.</li>
          <li>Make sure to review the rules before placing your bet.</li>
        </ul>
      </p>
    </div>
  );
}

export default AmountInput;
