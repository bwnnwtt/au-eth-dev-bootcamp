// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    
    constructor() payable {
        // reverts transaction if less than 1 eth is sent
        require(msg.value >= 1 ether, "Error: less than 1 eth sent");
    }
}