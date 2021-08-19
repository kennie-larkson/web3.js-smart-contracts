require("dotenv").config();
// const Tx = require("@ethereumjs/tx");
const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(process.env.URL_ROPSTEN);

const fromAccount = process.env.NEW_ACCOUNT_ADDRESS_01 
const fromPK = process.env.NEW_ACCOUNT_PRIVATE_KEY_01 
contractAddress = process.env.SMART_CONTRACT_ADDRESS 
const abi = JSON.parse(process.env.CONTRACT_ABI )

//interact wit the contract 
const contractDetails = async () => {
    //get the contract token
    const tokenContract = await new web3.eth.Contract(abi, contractAddress);
    //console.log(tokenContract);
    // get the name of the smart contract
    tokenContract.methods.name().call((err, result) => console.log(result))

    // get the symbol of the smart contract
    tokenContract.methods.symbol().call((err, result) => console.log(result))

    // get the total supply of the smart contract
    tokenContract.methods.totalSupply().call((err, result) => console.log(result))

    // get the balance of tokens of the account that deployed it
    tokenContract.methods.balanceOf(fromAccount).call((err, result) => console.log(result))
}

contractDetails()
