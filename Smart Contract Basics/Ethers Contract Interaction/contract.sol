// SPDX-License-Identifier: MIT
pragma solidity 0.7.5;

contract Contract {
    uint public value;
    address owner;
    string public message;

    constructor() {
        owner = msg.sender;
    }

	function modify(uint _value) external {
		value = _value;
	}

    function modify(string calldata _message) external {
        require(msg.sender != owner, "Owner cannot modify the message!");
        message = _message;
    }

    function deposit() payable external { }
}