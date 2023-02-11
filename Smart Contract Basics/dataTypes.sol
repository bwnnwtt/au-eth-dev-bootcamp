// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ContractBoolean {
	bool public a = true;
    bool public b = false;
}

contract ContractUInt {
    uint8 public a = 69;
    uint16 public b = 256;
    uint256 public c = a + b;
}

contract ContractInt {
    int8 public a = 69;
    int8 public b = -42;
    int16 public difference = a - b;
}

// string literals can be represented in data type bytes or string
// more efficient to store in bytes32 if the string literal is < 32 bytes
contract ContractString {
	bytes32 public msg1 = "Hello World";
    string public msg2 = "learning solidity now it is pretty interesting";
}

contract ContractEnum {
    enum Foods { Apple, Pizza, Bagel, Banana }

	Foods public food1 = Foods.Apple;
	Foods public food2 = Foods.Pizza;
	Foods public food3 = Foods.Bagel;
	Foods public food4 = Foods.Banana;
}