// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract BigBrainToken {
    // Constructor
    uint256 public totalSupply;

    // Mapping declares an array with key address and value uint256
    // Stores all addresses and the amount each address holds
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply;
    }

    // Set the total number of tokens

    // Read the total number of tokens
}
