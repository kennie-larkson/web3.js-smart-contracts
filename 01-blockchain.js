require('dotenv').config()
const Web3 = require("web3")


const url = process.env.URL 
const address = process.env.ADDRESS 
const web3 = new Web3(url)

async function accountBalance() {
	const balance = await web3.eth.getBalance(address)
	const ethBal = web3.utils.fromWei(`${balance}`, 'ether')
	console.log(balance)
	console.log(ethBal)
	
}


//async function createAccount () {
//	newAcct = await web3.eth.accounts.create()
//	console.log(newAcct)
//
//}
accountBalance()

