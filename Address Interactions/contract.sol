// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    address public owner;
    address public charity;

    constructor(address _charity) {
        // stores the address of the account which deployed the contract
        owner = msg.sender;
        charity = _charity;
    }

    // special method which does not require function keyword. allows EOAs to send ether. ether will be stored in contract account balance
    receive() external payable { }

    // method that allows onwer to receive a tip
    function tip() public payable {
        (bool s, ) = owner.call{ value: msg.value }("");
        // reverts a transaction if there is an error during the call
        require(s);
    }


    // method that transfers the balance in contract to charity address
    function donate() public payable {
        (bool s, ) = charity.call{ value: address(this).balance }(""); // address(this) references the address of the contract
        require(s);
        // destroy the contract. remaining balance gets sent to msg.sender deprecated method.
        selfdestruct(payable(msg.sender));
    }
}