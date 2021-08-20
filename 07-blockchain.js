require("dotenv").config();
const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(process.env.URL_MAINNET);

//get a contract (contract address) to interact with from etherscan
const contractAbi = process.env.DAITOKEN_CONTRACT_ABI;
const abi = JSON.parse(contractAbi);
const contractAddress = process.env.DAITOKEN_CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(abi, contractAddress);

//console.log(contract.events);
// get some events to listen to from the contract

  const eventListener = async () => {
await contract.getPastEvents(
  "allEvents",
  { fromBlock: 13062958, toBlock: 'latest' },
  (err, events) => {
    //console.log(events);
    //console.log(events.length);
    console.log(events[137]);
  }
);

  }

  eventListener()
