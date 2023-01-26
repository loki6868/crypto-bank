$(document).ready(function () {
    ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        alert("1")
    });
    checkMM();
    const stakingAppAddress = "0x54320Ff2d9c471DC936982e3184aC3917eAA7540";
    const web3 = new Web3(window.ethereum);
    var currentAccount;
    // window.ethereum.enable();
    var stakingAppContract = new web3.eth.Contract(stakingAppABI, stakingAppAddress);

    var ids = getPositionIdByAddress().then(data => {
        console.log(data)
    }).catch(error => {
        console.log(error);
    });

    //GetPositsionsByAddress

    //Stake

    //Claim

    //Widthdraw

    //Switch Accounts

    //Switch Networks

    //var token = getToken('ETH').then(data => { console.log(data) });
    //stake('USDT', 10);

    $("#connectMM").click(function () {
        connectMM().then(data => {
            currentAccount = data[0];
            console.log(currentAccount);
            getPositionIdByAddress().then(data => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });

        }).catch(error => {
            console.log(error);
        })
    });

    async function connectMM() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts;
        // const account = accounts[0];
        // showAccount.innerHTML = account;
    }

    function checkMM() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('Metamask is installed!')
        } else {
            console.log("You must instal Metamask!")
        }
    }

    function getToken(_symbol) {
        return stakingAppContract.methods.getToken(_symbol).call();
    }

    async function stake(_symbol, _amount) {
        var usdtContract = new web3.eth.Contract(usdtABI, '0xFdb7EdaE5218a5f0E9F5860c71AdE015209385B0');
        var toWei = web3.utils.toWei(_amount+'', 'ether')
        await usdtContract.methods.approve('0x54320Ff2d9c471DC936982e3184aC3917eAA7540', toWei).send({ from: '0x348E9aC371Ee4524f78bA679d81484d98E9eb632' });

        stakingAppContract.methods.stake(_symbol, toWei).send({ from: '0x348E9aC371Ee4524f78bA679d81484d98E9eb632' });
    }

    function getPositionIdByAddress() {
        return stakingAppContract.methods.getAddressToPositionIds().call({ from: '0x348E9aC371Ee4524f78bA679d81484d98E9eb632' });
    }

    function getPositionById(id) {
        return cryptoZombies.methods.zombies(id).call();
    }
});

// add param addess to function getPositon