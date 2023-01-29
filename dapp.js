$(document).ready(function () {
    const web3 = new Web3(window.ethereum);
    var currentAccount;
    var currentSelectedAsset;
    var currentSelectedAssetBalance = 1;
    const stakingAppContract = new web3.eth.Contract(stakingAppABI, stakingAppAddress);

    displayMarkets();
    checkMM();
    onload();

    ethereum.on('accountsChanged', function (accounts) {
        onload();
    });

    function onload() {
        connectMM().then(accounts => {
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
        $('#ethereumMarket').empty();
        let index = 1;
        for (token of tokens) {
            let tokenDetail = token[1];
            $('#ethereumMarket').append(`<tr>
                <th scope="row">${index++}</th>
                <td>
                    <img src="${tokenDetail.imgSrc}" height="40px" alt="">
                    <b>${tokenDetail.name}</b>
                </td>
                <td class='fw-bold'>${tokenDetail.symbol}</td>
                <td class='fw-bold'>${tokenDetail.rate}</td>
                <td>
                    <button type="button" class="btn btn-primary btnStake" data-bs-toggle="modal" data-bs-target="#myModal" value="${tokenDetail.symbol}">
                        Stake now
                    </button>
                </td>
            </tr>`);
        }
    };

    $("#connectMM").click(function () {
        if (currentAccount === 'undefined') {
            onload();
        } else {
            console.log('is connected')
        }
    });

    $('.btnStake').click(async function () {
        currentSelectedAsset = $(this).val();
        $('#modal-img-src').attr('src', tokens.get(currentSelectedAsset).imgSrc)
        $('#symbol').text(currentSelectedAsset);
        await getBalance().then(amount => {
            currentSelectedAssetBalance = web3.utils.fromWei(amount + '', 'ether');
        }).catch(console.log);
        $('#amount').attr('placeholder', currentSelectedAssetBalance);
    });

    $('#modal-stake-btnMaximum').click(async function () {
        $('#amount').val(currentSelectedAssetBalance);
    });

    $('#btn-stakeModal').click(function () {
        // var amountMax = currentSelectedAssetBalance;
        var amount = $('#amount').val();
        if (amount <= 0) {
            console.log("amount <= 0")
        } else {
            stake(currentSelectedAsset, amount);
        }
    });

    async function connectMM() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts;
    }

    function checkMM() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('Metamask is installed!')
        } else {
            console.log("You must instal Metamask!")
        }
    }

    function displayConnectedWallet() {
        $('#connectMM span').text(currentAccount.substr(0, 6) + '...' + currentAccount.substr(-6));
    }

    async function displayStakedAssets(ids) {
        $('#stakedAssets').empty();
        let index = 1;
        await (async () => {
            for await (id of ids) {
                await caculateRewardsByPositionId(id).then(reward => {
                    var reward = web3.utils.fromWei(reward + '', 'ether');
                    getPositionById(id).then(position => {
                        $('#stakedAssets').append(`<tr>
                        <th scope="row">${index++}</th>
                        <td>
                            <img src="${tokens.get(position.symbol).imgSrc}" height="40px" alt="">
                            <b>${position.symbol}</b>
                        </td>
                        <td class='fw-bold'>${web3.utils.fromWei(position.amount + '', 'ether')}</td>
                        <td class='fw-bold'>${tokens.get(position.symbol).rate}</td>
                        <td class='fw-bold'>${reward}</td>
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
        })();
    };

    function myGreeting() {
        $('#staked-assets--loading').empty();
        $('.btnClaim').click(function () {
            console.log('position id ' + $(this).val())
            claim($(this).val());
        });

        $('.btnWithdraw').click(function () {
            if (true) {
                console.log('Withdraw no yet!')
            } else {
                withdraw($(this).val());
            }
        });
    };

    async function stake(_symbol, _amount) {
        if (_symbol == 'ETH') {
            var toWei = web3.utils.toWei(_amount + '', 'ether');
            stakingAppContract.methods.stake(_symbol, toWei)
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
            await tokenContract.methods.approve(stakingAppAddress, toWei).send({ from: currentAccount });
            stakingAppContract.methods.stake(_symbol, toWei)
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
        return stakingAppContract.methods.getPositionIdsByAddress(address).call();
    }

    function getPositionById(id) {
        return stakingAppContract.methods.getPositionById(id).call();
    }

    function caculateRewardsByPositionId(id) {
        return stakingAppContract.methods.caculateRewards(id).call();
    }

    function claim(positionId) {
        return stakingAppContract.methods.claim(positionId)
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
        return stakingAppContract.methods.unstake(positionId).send({ from: currentAccount });
    }

    async function getBalance() {
        if (currentSelectedAsset !== 'ETH') {
            const tokenContract = new web3.eth.Contract(tokens.get(currentSelectedAsset).abi, tokens.get(currentSelectedAsset).address);
            var balance = await tokenContract.methods.balanceOf(currentAccount).call();
            return balance;
        } else {
            var balance = await web3.eth.getBalance(currentAccount);
            return balance;
        }
    }
});