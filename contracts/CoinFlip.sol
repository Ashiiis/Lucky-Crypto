// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function flip(bool _choice) external payable returns (bool) {
        require(msg.value > 0, "Betting amount must be greater than 0");
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % 2;
        bool result = random == 1;

        if (result == _choice) {
            payable(msg.sender).transfer(msg.value * 2);
            return true;
        }

        return false;
    }

    function fundContract() external payable {}

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
