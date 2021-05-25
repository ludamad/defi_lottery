// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import '../node_modules/@chainlink/contracts/src/v0.6/ChainlinkClient.sol';

contract HelloWorld is ChainlinkClient {
  string public greet = 'Hello World!';
}
