const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'Insert mneomonic here',
  'https://rinkeby.infura.io/v3/af0b044f049846699f6a462e549a8b1f'
);

const web3 = new Web3(provider);


 const deploy = async () => {

    accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from accounts", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
         .deploy({data: '0x' + bytecode }) // add 0x bytecode
         .send({from: accounts[0]}); // remove 'gas'
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};


deploy();
