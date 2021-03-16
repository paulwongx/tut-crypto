// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract BigBrainToken {
    // Constructor
    uint256 public totalSupply;

    // Mapping declares an array with key address and value uint256
    // Stores all addresses and the amount each address holds
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;

        // allocate the initial supply

    }

}
