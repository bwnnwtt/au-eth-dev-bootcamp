// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

contract Contract {
	address owner;
	uint configA;
	uint configB;
	uint configC;

	constructor() {
		owner = msg.sender;
	}

	function setA(uint _configA) public onlyOwner {
		configA = _configA;
	}

	function setB(uint _configB) public onlyOwner {
		configB = _configB;
	}

	function setC(uint _configC) public onlyOwner {
		configC = _configC;
	}

	modifier onlyOwner {
        // statements before _; will run before the function
        require(msg.sender == owner);
        _; // denotes the function that gets called
        // statements after _; will run after the function
	}
}
