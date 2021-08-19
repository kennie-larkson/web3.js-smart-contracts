require("dotenv").config();
const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(process.env.URL_ROPSTEN);

const fromAccount = process.env.NEW_ACCOUNT_ADDRESS_01;
const fromPK = process.env.NEW_ACCOUNT_PRIVATE_KEY_01;
const fromPrivateKeyBuffer = Buffer.from(fromPK, 'hex');
const toAccount = process.env.NEW_ACCOUNT_ADDRESS_02
const toPK = process.env.NEW_ACCOUNT_PRIVATE_KEY_02

const abi = JSON.parse(process.env.CONTRACT_ABI )
const contract = new web3.eth.Contract(abi, process.env.SMART_CONTRACT_ADDRESS )
const data = contract.methods.transfer(toAccount, 1000).encodeABI()
//console.log(data)

const transferSum = async (req, res) => {
    try {
      const txnCount = await web3.eth.getTransactionCount(fromAccount);
      console.log(`Transaction count: ${txnCount}`);
  
      //build a transaction
      const txnObject = {
        nonce: web3.utils.toHex(txnCount),
        to: process.env.SMART_CONTRACT_ADDRESS,
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
        data: data,
      };


    //   //sign transaction 
      const tx = new Tx.Transaction(txnObject, { chain: "ropsten" })
      tx.sign(fromPrivateKeyBuffer)

      const serializedTx = tx.serialize()
      const raw = "0x" + serializedTx.toString('hex')

    //   //broadcast the transaction 
      web3.eth.sendSignedTransaction(raw, (err, txHash) => {
          console.log("err: ", err, "txHash: ", txHash);
          //use the txHash to find the transaction on Etherscan 
      })



     
    } catch (error) {
      console.log(error);
     }
  };
  
  transferSum()
