require('dotenv').config()
const Web3 = require('web3')
const web3 = new Web3(process.env.URL)

//creating smart contracts on the ethereum blockchain
const abi = process.env.CONTRACT_ABI

const contractAddress = process.env.CONTRACT_ADDRESS

async function createContract () {
	//the abi should be converted to a json object 
	const contract = await new web3.eth.Contract(JSON.parse(abi), contractAddress)
	//console.log(contract)
	//console.log(contract.methods)

	//getting the contract name as it is on etherscan (info about contracts on the ethereum blockchain)
	console.log(await contract.methods.name().call())

	//getting the contract token symbol as it is on etherscan (info about contracts on the ethereum blockchain)
	console.log(await contract.methods.symbol().call())

	//getting total of this type of token that exists as seen on etherscan (info about contracts on the ethereum blockchain)
	console.log(await contract.methods.totalSupply().call())

	//check if all the tokens have been minted as seen on etherscan (info about contracts on the ethereum blockchain)
	//console.log(await contract.methods.mintingFinished().call())

	//check if all the tokens have been minted as seen on etherscan (info about contracts on the ethereum blockchain)
	console.log(await contract.methods.balanceOf('0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5').call())
	return 
}


createContract()
