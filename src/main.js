const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('5997f0aca13e25654355817c1b528323d99b421f38cd9c9b8e88f589c3acf989');
const myWalletAddress = myKey.getPublic('hex');

let blockchain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
blockchain.addTransaction(tx1);

console.log('\n Starting the miner...');
blockchain.minePendingTransactions(myWalletAddress);

console.log('\n Balance of xavier is', blockchain.getBalanceOfAddress(myWalletAddress));

// Tampering with the chain for validation check
blockchain.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', blockchain.isChainValid());