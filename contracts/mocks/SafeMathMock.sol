// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../contracts/open-zeppelin/SafeMath.sol";


contract SafeMathMock {
    function sub(uint256 a, uint256 b) public pure returns (uint256) {
        return SafeMath.sub(a, b);
    }

    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return SafeMath.add(a, b);
    }
}
