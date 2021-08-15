require("dotenv").config();
const Tx = require("@ethereumjs/tx");
const Web3 = require("web3");
const web3 = new Web3(process.env.URL);
