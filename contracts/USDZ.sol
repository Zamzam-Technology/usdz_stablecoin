// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.16;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

contract USDZ is
    OwnableUpgradeable,
    ERC20Upgradeable,
    PausableUpgradeable,
    ReentrancyGuardUpgradeable
{
    /**
     * Variables
     */

    address private _minter;

    /**
     * Events
     */

    event MinterChanged(address indexed oldAddress, address indexed newAddress);

    /**
     * Modifiers
     */

    modifier onlyMinter() {
        require(msg.sender == _minter, "Minter: not allowed");
        _;
    }

    function initialize(address minter, uint256 initialSupply)
        external
        initializer
    {
        __Ownable_init();
        __Pausable_init();
        __ReentrancyGuard_init();
        __ERC20_init_unchained("Stablecoin USDZ", "USDZ");
        _minter = minter;
        _mint(minter, initialSupply);
    }

    function burn(address account, uint256 amount) external onlyMinter {
        _burn(account, amount);
    }

    function mint(address account, uint256 amount) external onlyMinter {
        _mint(account, amount);
    }

    function changeMinter(address minter) external onlyOwner {
        address oldAddress = _minter;
        _minter = minter;
        emit MinterChanged(oldAddress, minter);
    }

    function getMinterAddress() external view returns (address) {
        return _minter;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unPause() external onlyOwner {
        _unpause();
    }
}
