require('dotenv').config()
const Web3 = require('web3')
const web3 = new Web3(process.env.URL)

//get the current gas price on the block (this is the price necessary to perform a txn on the ethereum blockchain network)
async function gasPrice () {
	const gas_price = await web3.eth.getGasPrice().then(price => web3.utils.fromWei(price, 'ether'))
console.log(gas_price)
}

//get list of accounts on the node
async function getAccounts () {
	const list_of_accounts = await web3.eth.getAccounts().then(accounts => accounts)
console.log(list_of_accounts)
}

// the web3 hashing function 
console.log(web3.utils.sha3('kenniecodecamp'))

//getAccounts()
//gasPrice()