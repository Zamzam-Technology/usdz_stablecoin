// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../contracts/USDZImplementation.sol";


contract USDZWithBalance is USDZImplementation {
    function initializeBalance(address initialAccount, uint initialBalance) public {
        balances[initialAccount] = initialBalance;
        totalSupply_ = initialBalance;
    }
}
