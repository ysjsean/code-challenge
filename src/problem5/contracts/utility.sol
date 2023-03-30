// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.8.0;

import {IERC20} from "./IERC20.sol";

contract Utility {
    function getBalances(
        address walletAddress,
        address[] memory tokenAddresses
    ) public view returns (address[] memory, uint[] memory) {
        uint len = tokenAddresses.length;
        uint[] memory balances = new uint256[](len);
        for (uint i = 0; i < len; i++) {
            balances[i] = IERC20(tokenAddresses[i]).balanceOf(walletAddress);
        }
        return (tokenAddresses, balances);
    }
}
