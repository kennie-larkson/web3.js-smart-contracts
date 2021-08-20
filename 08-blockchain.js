require("dotenv").config();
const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(process.env.URL_MAINNET);

// get the latest blockNumber on the ethereum network
const getBlockInfo = async () => {
  const blockNum = await web3.eth.getBlockNumber();
  console.log("Block Number: ", blockNum);
};

//getBlockInfo()

// get the latest block info on the ethereum network
const getBlock = async () => {
  const block = await web3.eth.getBlock(13064191);
  console.log(
    "Latest BlockHash : ",
    block.hash,
    "Block Number :",
    block.number,
    "Time stamp :",
    block.timestamp,
    "Miner :",
    block.miner
  );
};

//getBlock();

//get the last 10 blocks 
const getLastTen = async () => {
    web3.eth.getBlockNumber(function (error, result) {
        for(let i = 0; i < 10; i++) {
            web3.eth.getBlock( 'latest', true, function(error, block) {
                console.log('Block Number :', block.number)
            });
        }
    });

}

//getLastTen()

//get the current gasPrice on the ethereum network
web3.eth.getGasPrice(function(error, price) {
    console.log('Gas Price: ', web3.utils.fromWei(price, 'ether'));
});
