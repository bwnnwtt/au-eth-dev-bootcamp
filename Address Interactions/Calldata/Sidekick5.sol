// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Sidekick {
    function makeContact(address hero) external {
        // calls a function that does not exist in hero. this triggers the fallback function in hero
        (bool success, ) = hero.call(abi.encodeWithSignature("fakeFunction()"));

        require(success);
    }
}