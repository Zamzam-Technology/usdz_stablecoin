// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.5;

// This is used for migrations / testing.

contract Migrations {
    uint public last_completed_migration;

    function setCompleted(uint completed) public {
        last_completed_migration = completed;
    }

    function upgrade(address new_address) public {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }
}
