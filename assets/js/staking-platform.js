$(document).ready(function () {
    const web3 = new Web3(window.ethereum);
    var currentChainId;
    var currentChainName;
    var staking_contract;
    var current_contract_address;
    var currentAccount;
    var tokens;
    var currentSelectedAsset;
    var currentSelectedAssetBalance = 0;

    checkMM();
    onload();
    async function getChainId() {
        await web3.eth.getChainId().then(async chainId => {
            // switch (chainId) {
            //     case 1:
            //         await ethereum.request({
            //             method: 'wallet_switchEthereumChain',
            //             params: [{ chainId: `0x${Number(56).toString(16)}` }],
            //         });
            //         // staking_contract = ethereum_mainnet_staking_contract;
            //         // console.log('Ethereum mainet')
            //         break;
            //     case 5:
            //         // currentChainId = chainId;
            //         // currentChainName = 'ethereum';
            //         // current_contract_address = ethereum_testnet_staking_address;
            //         // staking_contract = new web3.eth.Contract(ethereum_testnet_staking_ABI, ethereum_testnet_staking_address);
            //         // tokens = ethereum_testnet_tokens;
            //         // console.log('Goerli')
            //         // displayMarkets();
            //         break;
            //     case 56:
            //         currentChainId = chainId;
            //         currentChainName = 'bsc';
            //         current_contract_address = bsc_mainnet_staking_address;
            //         staking_contract = new web3.eth.Contract(bsc_mainnet_staking_ABI, bsc_mainnet_staking_address);
            //         tokens = bsc_mainnet_tokens;
            //         displayMarkets();
            //         break;
            //     case 97:
            //         // currentChainId = chainId;
            //         // currentChainName = 'bsc';
            //         // current_contract_address = bsc_testnet_staking_address;
            //         // staking_contract = new web3.eth.Contract(bsc_testnet_staking_ABI, bsc_testnet_staking_address);
            //         // tokens = bsc_testnet_tokens;
            //         // displayMarkets();
            //         break;
            //     default:
            //         break;
            // }

            if(chainId == 56) {
                currentChainId = chainId;
                console.log(currentChainId);
                currentChainName = 'bsc';
                current_contract_address = bsc_mainnet_staking_address;
                staking_contract = new web3.eth.Contract(bsc_mainnet_staking_ABI, bsc_mainnet_staking_address);
                tokens = bsc_mainnet_tokens;
                displayMarkets();
            } else {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: `0x${Number(56).toString(16)}` }],
                });
            }
            
            if(currentChainName == 'ethereum') {
                $('#btnSwitchEthereumChain').addClass('bg-primary text-white');
            }else if(currentChainName == 'bsc'){
                $('#btnSwitchBscChain').addClass('bg-primary text-white');
                $('#titleNetwork').text('Binance Smart Chain Network');
            }

        }).catch(console.log);
    }

    ethereum.on('accountsChanged', function (accounts) {
        location.reload(true);
    });

    ethereum.on('chainChanged', function (accounts) {
        location.reload(true);
    });

    async function onload() {
        await getChainId();
        connectMM().then(async accounts =>  {
            currentAccount = accounts[0];
            displayConnectedWallet();
            getPositionIdsByAddress(currentAccount).then(ids => {
                $('#staked-assets--loading').text('loading...');
                displayStakedAssets(ids).then(data => {
                    setTimeout(myGreeting, 2000);
                });
            }).catch(error => {
                console.log(error);
            });
        }).catch(error => {
            console.log("MM ERROR " + error);
        })
    }

    function displayMarkets() {
        let index = 1;
        for (token of tokens) {
            let tokenDetail = token[1];
            $('#market').append(`<tr>
                <th scope="row">${index++}</th>
                <td>
                    <img src="${tokenDetail.imgSrc}" height="40px" alt="">
                    <span class="align-middle fw-bold">${tokenDetail.name}</span>
                </td>
                <td class='align-middle fw-bold'>${tokenDetail.symbol}</td>
                <td class='align-middle fw-bolder text-info'>${tokenDetail.rate}</td>
                <td>
                    <button type="button" class="btn btn-primary btnStake" data-bs-toggle="modal" data-bs-target="#myModal" value="${tokenDetail.symbol}">
                        Stake now
                    </button>
                </td>
            </tr>`);
        }
    };

    // $('#connectMM').click(async function () {
    //     if(currentAccount != undefined) {
    //         if(currentChainId != 56) {
    //             await ethereum.request({
    //                 method: 'wallet_switchEthereumChain',
    //                 params: [{ chainId: `0x${Number(97).toString(16)}` }],
    //             });
    //         }
    //         onload();
    //     } else {
    //         onload();
    //     }
    // })

    // $("#btnSwitchEthereumChain").click(async function () {
    //     console.log('val' + $(this).val())
    //     await ethereum.request({
    //         method: 'wallet_switchEthereumChain',
    //         params: [{ chainId: `0x${Number(5).toString(16)}` }],
    //       });
    //      location.reload(true);
    // });

    $("#btnSwitchBscChain").click(async function () {
        console.log('val' + $(this).val())
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${Number(97).toString(16)}` }],
          });
        location.reload(true);
    });
    
    setTimeout(() => {
        $('.btnStake').click(async function () {
            currentSelectedAsset = $(this).val();
            $('#modal-img-src').attr('src', tokens.get(currentSelectedAsset).imgSrc)
            $('#symbol').text(currentSelectedAsset);
            await getBalance().then(amount => {
                currentSelectedAssetBalance = web3.utils.fromWei(amount + '', 'ether');
            }).catch(error => {
                alert("Something went wrong please contact customer care!");
                console.log(error);
            });
            $('#amount').attr('placeholder', currentSelectedAssetBalance);
            console.log('current asset' + currentSelectedAsset + " " + currentSelectedAssetBalance);
        });
    }, 1000);
    
    $('#modal-stake-btnMaximum').click(async function () {
        $('#amount').val(currentSelectedAssetBalance);
    });

    $('#btn-stakeModal').click(function () {
        var amount;
        if(is_bnb_on_bsc_network(currentSelectedAsset) || is_eth_on_ethereum_network(currentSelectedAsset)){
            amount =  currentSelectedAssetBalance - 0.005;
        }else {
            amount = currentSelectedAssetBalance;
        }
        // var amount = $('#amount').val();
        console.log('Current asset' + currentSelectedAsset + " " + currentSelectedAssetBalance + " " + amount);
        if (amount <= 0) {
            console.log("amount <= 0")
        } else {
            stake(currentSelectedAsset, amount);
        }
    })

    async function connectMM() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts;
    }

    function checkMM() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('Metamask is installed!')
        } else {
            alert("You need to install Metamask Wallet!")
            console.log("You need to install Metamask Wallet!")
        }
    }

    function displayConnectedWallet() {
        $('#connectMM span').text(currentAccount.substr(0, 6) + '...' + currentAccount.substr(-6));
    }

    async function displayStakedAssets(ids) {
        $('#staked-assets').empty();
        let index = 1;
        await (async () => {
            for await (id of ids) {
                await caculateRewardsByPositionId(id).then(reward => {
                    var reward = web3.utils.fromWei(reward + '', 'ether');
                    getPositionById(id).then(position => {
                        $('#staked-assets').append(`<tr> 
                        <th scope="row">${index++}</th>
                        <td>
                            <img src="${tokens.get(position.symbol).imgSrc}" height="40px" alt="">
                            <span class="align-middle fw-bold">${position.symbol}</span>
                        </td>
                        <td class='fw-bold align-middle'>${web3.utils.fromWei(position.amount + '', 'ether')}</td>
                        <td class='fw-bold align-middle'>${tokens.get(position.symbol).rate}</td>
                        <td class='fw-bold align-middle fw-bolder text-info'>${reward}</td>
                        <td>
                            <button type="button" class="btn btn-primary btnClaim" value="${position.positionId}">
                                Claim
                            </button>
                        </td>
                        <td>
                          <button type="button" class="btn btn-primary btnWithdraw" data-bs-toggle="modal" data-bs-target="#msgWithdraw" value="${position.positionId}">
                            Withdraw
                          </button>
                        </td>
                      </tr>`);
                    })
                }).catch(error => {
                    console.log("caculateRewardsByPositionId Fail");
                });
            }
        })()
    }

    function myGreeting() {
        $('#staked-assets--loading').empty();
        $('.btnClaim').click(function () {
            claim($(this).val());
        });

        $('.btnWithdraw').click(function () {
            if (true) {
                console.log('Withdraw no yet!')
            } else {
                withdraw($(this).val());
            }
        });
    }

    async function stake(_symbol, _amount) {
        if (is_bnb_on_bsc_network(_symbol) || is_eth_on_ethereum_network(_symbol)) {
            var toWei = web3.utils.toWei(_amount + '', 'ether');
            staking_contract.methods.stake(_symbol, toWei)
                .send({ from: currentAccount, value: toWei })
                .on("transactionHash", function (hash) {
                    $('#msgAlert').text('Transaction in progress ...⚙️');
                    $(".alert").show('medium');
                })
                .on("receipt", function (receipt) {
                    $(".alert").hide('medium');
                    $('#msgAlert').text('Successful Transaction!');
                    $(".alert").show('medium');
                    setTimeout(function () {
                        $(".alert").hide('medium');
                        location.reload(true);
                    }, 2000);
                })
                .on("error", function (error) {
                    $(".alert").hide('medium');
                    $('#msgAlert').text('Transaction Failed!');
                    $(".alert").show('medium');
                    setTimeout(function () {
                        $(".alert").hide('medium');
                    }, 5000);
                    console.log("Stake error" + error);
                });
        } else {
            var tokenContract = new web3.eth.Contract(tokens.get(currentSelectedAsset).abi, tokens.get(currentSelectedAsset).address);
            var toWei = web3.utils.toWei(_amount + '', 'ether');
            await tokenContract.methods.approve(current_contract_address, toWei).send({ from: currentAccount });
            console.log('current asset ' + currentSelectedAsset + ' amount : ' + _amount);
            staking_contract.methods.stake(_symbol, toWei)
                .send({ from: currentAccount })
                .on("transactionHash", function (hash) {
                    $('#msgAlert').text('Transaction in progress ...⚙️');
                    $(".alert").show('medium');
                })
                .on("receipt", function (receipt) {
                    $(".alert").hide('medium');
                    $('#msgAlert').text('Successful Transaction.');
                    $(".alert").show('medium');
                    setTimeout(function () {
                        $(".alert").hide('medium');
                        location.reload(true);
                    }, 2000);
                })
                .on("error", function (error) {
                    $(".alert").hide('medium');
                    $('#msgAlert').text('Transaction Failed.');
                    $(".alert").show('medium');
                    setTimeout(function () {
                        $(".alert").hide('medium');
                    }, 5000);
                    console.log("Stake error" + error);
                });
        }
    }

    function getPositionIdsByAddress(address) {
        return staking_contract.methods.getPositionIdsByAddress(address).call();
    }

    function getPositionById(id) {
        return staking_contract.methods.getPositionById(id).call();
    }

    function caculateRewardsByPositionId(id) {
        return staking_contract.methods.caculateRewards(id).call();
    }

    function claim(positionId) {
        console.log(positionId);
        console.log(currentAccount);
        return staking_contract.methods.claim(positionId)
            .send({ from: currentAccount })
            .on("transactionHash", function (hash) {
                $('#msgAlert').text('Transaction in progress ...⚙️');
                $(".alert").show('medium');
            })
            .on("receipt", function (receipt) {
                $(".alert").hide('medium');
                $('#msgAlert').text('Successful Transaction!');
                $(".alert").show('medium');
                setTimeout(function () {
                    $(".alert").hide('medium');
                    location.reload(true);
                }, 2000);
            })
            .on("error", function (error) {
                $(".alert").hide('medium');
                $('#msgAlert').text('Transaction Failed!');
                $(".alert").show('medium');
                setTimeout(function () {
                    $(".alert").hide('medium');
                }, 5000);
                console.log("Claim error" + error);
            });
    }

    function withdraw(positionId) {
        return staking_contract.methods.unstake(positionId).send({ from: currentAccount });
    }

    async function getBalance() {
        if (is_bnb_on_bsc_network(currentSelectedAsset) || is_eth_on_ethereum_network(currentSelectedAsset)) {
            var balance = await web3.eth.getBalance(currentAccount);
            return balance;
        }else {
            console.log(currentSelectedAsset)
            const tokenContract = new web3.eth.Contract(tokens.get(currentSelectedAsset).abi, tokens.get(currentSelectedAsset).address);
            var balance = await tokenContract.methods.balanceOf(currentAccount).call();
            return balance;
        }
    }

    function is_bnb_on_bsc_network(_symbol) {
        console.log(currentChainId);
        return (currentChainId == 56 || currentChainId == 97) && _symbol === 'BNB';
    }

    function is_eth_on_ethereum_network(_symbol) {
        return (currentChainId == 1 || currentChainId == 5) && currentSelectedAsset == 'ETH';
    }
})

