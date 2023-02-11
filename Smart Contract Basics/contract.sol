// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {

    uint public x;

    // deploys Contract with x initialized as _x
    constructor(uint _x) {
        x = _x;
    }

    // allows an external contract to increment x by 1
    function increment() external {
        x += 1;
    }

    // external contract to add a value to x and return the sum. view keyword indicates that the contract state is unchanged
    function add(uint _param) external view returns(uint) {
        return _param + x;
    }

    /* function double is overloaded
    */

    // external contract to double the value passed into the function and returns the output. pure keyword indicates that the contract is neither changed nor accessed
    function double(uint _param) external pure returns(uint double) {
        double = _param * 2;
    }

    // external contract which returns a tuple of uint values which is the double of the inputs passed in
    function double(uint x, uint y) external pure returns(uint, uint) {
        return (x*2, y*2);
    }
}