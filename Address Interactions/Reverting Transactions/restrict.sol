// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// line below is a custom error
// error NotItemCreator();

contract Contract {
    address owner;
    
    constructor() payable {
        owner = msg.sender;
    }

    function withdraw() public {
        /* // alternative to reverting a tx with a custom error
        if(msg.sender != owner) {
            revert NotItemCreator();
        }
        */
        require(msg.sender == owner, "only owner can withdraw");
        (bool s, ) = owner.call{ value: address(this).balance }("");
        require(s);
    }

}