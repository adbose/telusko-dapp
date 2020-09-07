// TODO: Reload balance on response of transaction completion

var contract;

$(document).ready(function(){
    let web3 = new Web3(Web3.givenProvider);

    // Smart contract address deployed in the Ropsten Testnet
    var address = "0x86C05047E8b79c327703866559b06aDf0Ef3b733";
    // Smart contract ABI
    var abi = [
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
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ]

    contract = new web3.eth.Contract(abi, address);

    contract.methods.getBalance().call().then(function(bal) {
        $('#balance').append(bal);
    })

    $('#deposit').click(function() {
        var amt = 0;
        amt = parseInt($('#amount').val());

        web3.eth.getAccounts().then(function(accounts) {
            // first select an account to send transaction from
            // no ether is sent, only gas is spent to make a tx
            var acc = accounts[0];
            return contract.methods.deposit(amt).send({from: acc});
        }).then(function(tx) {
            console.log(tx);
        }).catch(function(tx) {
            console.log(tx);
        })
    })

    $('#withdraw').click(function() {
        var amt = 0;
        amt = parseInt($('#amount').val());

        web3.eth.getAccounts().then(function(accounts) {
            // first select an account to send transaction from
            // no ether is sent, only gas is spent to make a tx
            var acc = accounts[0];
            return contract.methods.withdraw(amt).send({from: acc});
        }).then(function(tx) {
            console.log(tx);
        }).catch(function(tx) {
            console.log(tx);
        })
    })
})