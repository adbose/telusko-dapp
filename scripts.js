var contract;

$(document).ready(function(){
    let web3 = new Web3(Web3.givenProvider);

    // Smart contract address deployed in the Ropsten Testnet
    var address = "0x309218DbD0e2DA8604df43bE0C83F1719F9D3623";
    // Smart contract ABI
    var abi = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "amt",
                    "type": "int256"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "amt",
                    "type": "int256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "int256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

    contract = new web3.eth.Contract(abi, address);

    contract.methods.getBalance().call().then(function(bal) {
        $('#balance').append(bal);
    })
})