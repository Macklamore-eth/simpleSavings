//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SimpleSavings {
    uint256 public balance;
    uint256 public lockUntil;
    address payable public owner;

    event WithdrawalNotAvailable(uint256 remainingMinutes);

    constructor() {
        owner = payable(msg.sender);
    }

    function deposit() public payable {
        balance += msg.value;
        lockUntil = block.timestamp + 2 hours;
    }

    function withdraw() public {
        if (block.timestamp >= lockUntil) {
            owner.transfer(balance);
            balance = 0;
        } else {
            uint256 remainingMinutes = (lockUntil - block.timestamp) / 1 minutes;
            emit WithdrawalNotAvailable(remainingMinutes);
        }
    }
}
