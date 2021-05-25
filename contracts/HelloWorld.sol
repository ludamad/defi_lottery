// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import '../node_modules/@chainlink/contracts/src/v0.6/ChainlinkClient.sol';

contract HelloWorld is ChainlinkClient {
  string public message;

  // When deploying contract a message is needed. Will use Gas
  constructor(string memory initMessage) public {
    message = initMessage;
  }

  // Updates the initial message USES GAS
  function updateMessage(string memory newMessage) public {
    message = newMessage;
  }
}
