// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DataPackage is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => uint256) public ownerToToken;

    constructor() ERC721("DataPackage", "PKG") {
        _tokenIds.increment();
    }

    function mint(address patient, string memory tokenURI)
        public
        returns (uint256)
    {
        require(ownerToToken[msg.sender] == 0, "Already minted");
        uint256 newPackageId = _tokenIds.current();
        _mint(patient, newPackageId);
        _setTokenURI(newPackageId, tokenURI);
        ownerToToken[msg.sender] = newPackageId;

        _tokenIds.increment();
        return newPackageId;
    }
}
