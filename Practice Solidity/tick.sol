// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    uint8 tickCount;

    // selfdestructs if tick() is called 10 times
    function tick() external {
        tickCount++;
        if(tickCount >= 10) {
            selfdestruct(payable(msg.sender));
        }
    }
}