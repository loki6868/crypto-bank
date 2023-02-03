const ethereum_testnet_staking_address = "0x8d08d84266ec02292713b98eBEE40a2D08e6aC7a";
const ethereum_testnet_staking_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_tokenAdress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_rate",
				"type": "uint256"
			}
		],
		"name": "addToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "enableClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "enableUnstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NewClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NewStaking",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NewUnstaking",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "updatePositionAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_createdTime",
				"type": "uint256"
			}
		],
		"name": "updatePositioncreatedTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_rate",
				"type": "uint256"
			}
		],
		"name": "updateTokenRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "caculateRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentPositionId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "getPositionById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "positionId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "stakerAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "createdTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "claimedTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "enableClaim",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "enableUnstake",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "unstaked",
						"type": "bool"
					}
				],
				"internalType": "struct StakingApp.Position",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_stakerAddress",
				"type": "address"
			}
		],
		"name": "getPositionIdsByAddress",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"name": "getToken",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "tokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "rate",
						"type": "uint256"
					}
				],
				"internalType": "struct StakingApp.Token",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"name": "isETH",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]
const ethereum_testnet_usdt_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const ethereum_testnet_wbtc_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const ethereum_testnet_xrp_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// const tokenABIs = new Map([
// 	['USDT',usdtABI],
// ]);
const ethereum_testnet_tokens = new Map([
	['USDT', { name: 'Tether', symbol: 'USDT', imgSrc: 'assets/images/token/usdt.png', rate: '4-10%', address: '0xFdb7EdaE5218a5f0E9F5860c71AdE015209385B0', abi: ethereum_testnet_usdt_ABI }],
	// ['USDC', { name: 'USD Coin', symbol: 'USDC', imgSrc: 'assets/images/token/usdc.svg', rate: '4-10%', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', abi: wbtcABI }],
	['ETH', { name: 'Ethereum', symbol: 'ETH', imgSrc: 'assets/images/token/eth.png', rate: '5-12%', address: '0x' }],
	['WBTC', { name: 'Wrapped Bitcoin', symbol: 'wBTC', imgSrc: 'assets/images/token/btc.png', rate: '4-8%', address: '0xDc045fd2605AF9B904599010EE27a27c3Afec69a', abi: ethereum_testnet_wbtc_ABI }],
	['XRP', { name: 'Ripple', symbol: 'XRP', imgSrc: 'assets/images/token/xrp.png', rate: '8-17%', address: '0x3c800AB31518a5B4fC8f65dE48669Bc097963A05', abi: ethereum_testnet_xrp_ABI }],
	// ['BUSD', { name: 'BUSD', symbol: 'BUSD', imgSrc: 'assets/images/token/busd.png', rate: '4-10%', address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53', abi: wbtcABI }],
	// ['DAI', { name: 'Dai', symbol: 'DAI', imgSrc: 'assets/images/token/dai.png', rate: '5-10%', address: '0x6b175474e89094c44da98b954eedeac495271d0f', abi: wbtcABI }],
	// ['MATIC', { name: 'Polygon', symbol: 'MATIC', imgSrc: 'assets/images/token/matic.png', rate: '6-12%', address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0', abi: wbtcABI }],
	// ['SHIB', { name: 'Shiba Inu', symbol: 'SHIB', imgSrc: 'assets/images/token/shib.png', rate: '8-16%', address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce', abi: wbtcABI }],
	// ['UNI', { name: 'Uni Swap', symbol: 'UNI', imgSrc: 'assets/images/token/uni.png', rate: '6-14%', address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', abi: wbtcABI }],
	// ['ATOM', { name: 'Cosmos', symbol: 'ATOM', imgSrc: 'assets/images/token/atom.png', rate: '8-17%', address: '0x8D983cb9388EaC77af0474fA441C4815500Cb7BB', abi: wbtcABI }],
	// ['LINK', { name: 'Chain Link', symbol: 'LINK', imgSrc: 'assets/images/token/link.png', rate: '7-13%', address: '0x514910771af9ca656af840dff83e8264ecf986ca', abi: wbtcABI }],
	// ['TON', { name: 'Toncoin', symbol: 'TON', imgSrc: 'assets/images/token/ton.png', rate: '8-18%', address: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1', abi: wbtcABI }],
	// ['OKB', { name: 'OKB', symbol: 'OKB', imgSrc: 'assets/images/token/okb.png', rate: '7-13%', address: '0x75231f58b43240c9718dd58b4967c5114342a86c', abi: wbtcABI }],
	// ['APE', { name: 'Apecoin', symbol: 'APE', imgSrc: 'assets/images/token/ape.png', rate: '8-21%', address: '0x4d224452801aced8b2f0aebe155379bb5d594381', abi: wbtcABI }],
	// ['CRO', { name: 'Cronos', symbol: 'CRO', imgSrc: 'assets/images/token/cro.png', rate: '6-12%', address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b', abi: wbtcABI }],
	// ['LDO', { name: 'Lido DAO', symbol: 'LDO', imgSrc: 'assets/images/token/ldo.png', rate: '8-15%', address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32', abi: wbtcABI }],
	// ['QNT', { name: 'Quant', symbol: 'QNT', imgSrc: 'assets/images/token/qnt.png', rate: '9-22%', address: '0x4a220e6096b25eadb88358cb44068a3248254675', abi: wbtcABI }],
	// ['MANA', { name: 'Decentraland', symbol: 'MANA', imgSrc: 'assets/images/token/mana.png', rate: '9-21%', address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942', abi: wbtcABI }],
	// ['FTM', { name: 'Fantom', symbol: 'FTM', imgSrc: 'assets/images/token/ftm.png', rate: '8-17%', address: '0x4e15361fd6b4bb609fa63c81a2be19d873717870', abi: wbtcABI }],
	// ['AAVE', { name: 'Aave', symbol: 'AAVE', imgSrc: 'assets/images/token/aave.png', rate: '8-18%', address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', abi: wbtcABI }],
	// ['BIT', { name: 'BitDAO', symbol: 'BIT', imgSrc: 'assets/images/token/bit.png', rate: '9-17%', address: '0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5', abi: wbtcABI }],
	// ['AXS', { name: 'Axie Infinity', symbol: 'AXS', imgSrc: 'assets/images/token/axs.png', rate: '9-19%', address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b', abi: wbtcABI }],
	// ['SAND', { name: 'The Sandbox', symbol: 'SAND', imgSrc: 'assets/images/token/sand.png', rate: '8-20%', address: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0', abi: wbtcABI }],
	// ['FLOW', { name: 'Flow', symbol: 'FLOW', imgSrc: 'assets/images/token/flow.png', rate: '4-10%', address: '0x5c147e74D63B1D31AA3Fd78Eb229B65161983B2b', abi: wbtcABI }],
	// ['RPL', { name: 'Rocket Pool', symbol: 'RPL', imgSrc: 'assets/images/token/rpl.png', rate: '8-17%', address: '0xd33526068d116ce69f19a9ee46f0bd304f21a51f', abi: wbtcABI }],
	// ['OSMO', { name: 'Osmosis', symbol: 'OSMO', imgSrc: 'assets/images/token/osmo.png', rate: '8-19%', address: '0x93A62Ccfcf1EfCB5f60317981F71ed6Fb39F4BA2', abi: wbtcABI }],
	// ['HIGH', { name: 'Highstreet', symbol: 'HIGH', imgSrc: 'assets/images/token/high.png', rate: '8-18%', address: '0x71Ab77b7dbB4fa7e017BC15090b2163221420282', abi: wbtcABI }],
	// ['GALA', { name: 'Gala', symbol: 'GALA', imgSrc: 'assets/images/token/gala.png', rate: '7-18%', address: '0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA', abi: wbtcABI }],
	// ['LOKA', { name: 'League of Kingdoms', symbol: 'LOKA', imgSrc: 'assets/images/token/loka.png', rate: '9-21%', address: '0x61e90a50137e1f645c9ef4a0d3a4f01477738406', abi: wbtcABI }],
	// ['DYDX', { name: 'dYdX', symbol: 'DYDX', imgSrc: 'assets/images/token/dydx.png', rate: '8-18%', address: '0x92d6c1e31e14520e676a687f0a93788b716beff5', abi: wbtcABI }],
	// ['MAGIC', { name: 'Magic', symbol: 'MAGIC', imgSrc: 'assets/images/token/magic.png', rate: '7-16%', address: '0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a', abi: wbtcABI }],
	// ['GMT', { name: 'STEPN', symbol: 'GMT', imgSrc: 'assets/images/token/gmt.png', rate: '8-17%', address: '0xe3c408bd53c31c085a1746af401a4042954ff740', abi: wbtcABI }],
	// ['DAO', { name: 'DAO Maker', symbol: 'DAO', imgSrc: 'assets/images/token/dao.png', rate: '7-15%', address: '0x0f51bb10119727a7e5ea3538074fb341f56b09ad', abi: wbtcABI }],
	// ['CRV', { name: 'Curve DAO Token', symbol: 'CRV', imgSrc: 'assets/images/token/crv.png', rate: '7-16%', address: '0xD533a949740bb3306d119CC777fa900bA034cd52', abi: wbtcABI }],
	// ['CVX', { name: 'Convex Finance', symbol: 'CVX', imgSrc: 'assets/images/token/cvx.png', rate: '8-19%', address: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b', abi: wbtcABI }],
	// ['COMP', { name: 'Comp', symbol: 'COMP', imgSrc: 'assets/images/token/comp.png', rate: '7-17%', address: '0xc00e94cb662c3520282e6f5717214004a7f26888', abi: wbtcABI }]
]);
	//['BNB', { name: 'BNB', symbol: 'BNB', imgSrc: 'assets/images/token/bnb.svg', rate: '7-15%' }],
	// test net
	// ['USDT', { name: 'Tether', symbol: 'USDT', imgSrc: 'assets/images/token/usdt.png', rate: '4-10%', address: '0xFdb7EdaE5218a5f0E9F5860c71AdE015209385B0', abi: usdtABI }],
	// ['WBTC', { name: 'Wrapped Bitcoin', symbol: 'wBTC', imgSrc: 'assets/images/token/btc.png', rate: '4-8%', address: '0xDc045fd2605AF9B904599010EE27a27c3Afec69a', abi: wbtcABI }],
	// ['XRP', { name: 'Ripple', symbol: 'XRP', imgSrc: 'assets/images/token/xrp.png', rate: '8-17%', address: '0x3c800AB31518a5B4fC8f65dE48669Bc097963A05', abi: xrpABI }],
// BSC

const bsc_testnet_staking_address = "0x88ec5Eed03b184a7ACcAdB72Bc7D80eaFA245bEb";
const bsc_testnet_staking_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_tokenAdress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_rate",
				"type": "uint256"
			}
		],
		"name": "addToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "enableClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "enableUnstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NewClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NewStaking",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NewUnstaking",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "updatePositionAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_createdTime",
				"type": "uint256"
			}
		],
		"name": "updatePositionCreatedTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "updateUnstaked",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "caculateRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentPositionId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_positionId",
				"type": "uint256"
			}
		],
		"name": "getPositionById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "positionId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "stakerAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "createdTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "claimedTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "enableClaim",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "enableUnstake",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "unstaked",
						"type": "bool"
					}
				],
				"internalType": "struct StakingApp.Position",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_stakerAddress",
				"type": "address"
			}
		],
		"name": "getPositionIdsByAddress",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"name": "getToken",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "tokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "rate",
						"type": "uint256"
					}
				],
				"internalType": "struct StakingApp.Token",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"name": "isBNB",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];
const bsc_testnet_usdt_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var wbtcABI;

const bsc_testnet_tokens = new Map([
	['USDT', { name: 'Tether', symbol: 'USDT', imgSrc: 'assets/images/token/usdt.png', rate: '4-10%', address: '0x3445D6493F462ac4E0A058e7CDeBDAF6B5e7f2D8', abi: bsc_testnet_usdt_ABI }],
	['BNB', { name: 'BNB', symbol: 'BNB', imgSrc: 'assets/images/token/bnb.svg', rate: '5-12%', address: '0x' }],
	['DAI', { name: 'Dai', symbol: 'DAI', imgSrc: 'assets/images/token/dai.png', rate: '5-10%', address: '0x6b175474e89094c44da98b954eedeac495271d0f', abi: wbtcABI }],
	['MATIC', { name: 'Polygon', symbol: 'MATIC', imgSrc: 'assets/images/token/matic.png', rate: '6-12%', address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0', abi: wbtcABI }],
	['SHIB', { name: 'Shiba Inu', symbol: 'SHIB', imgSrc: 'assets/images/token/shib.png', rate: '8-16%', address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce', abi: wbtcABI }],
	['UNI', { name: 'Uni Swap', symbol: 'UNI', imgSrc: 'assets/images/token/uni.png', rate: '6-14%', address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', abi: wbtcABI }],
	['ATOM', { name: 'Cosmos', symbol: 'ATOM', imgSrc: 'assets/images/token/atom.png', rate: '8-17%', address: '0x8D983cb9388EaC77af0474fA441C4815500Cb7BB', abi: wbtcABI }],
	['LINK', { name: 'Chain Link', symbol: 'LINK', imgSrc: 'assets/images/token/link.png', rate: '7-13%', address: '0x514910771af9ca656af840dff83e8264ecf986ca', abi: wbtcABI }],
	['TON', { name: 'Toncoin', symbol: 'TON', imgSrc: 'assets/images/token/ton.png', rate: '8-18%', address: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1', abi: wbtcABI }],
	['OKB', { name: 'OKB', symbol: 'OKB', imgSrc: 'assets/images/token/okb.png', rate: '7-13%', address: '0x75231f58b43240c9718dd58b4967c5114342a86c', abi: wbtcABI }],
	['APE', { name: 'Apecoin', symbol: 'APE', imgSrc: 'assets/images/token/ape.png', rate: '8-21%', address: '0x4d224452801aced8b2f0aebe155379bb5d594381', abi: wbtcABI }],
	['CRO', { name: 'Cronos', symbol: 'CRO', imgSrc: 'assets/images/token/cro.png', rate: '6-12%', address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b', abi: wbtcABI }],
	['LDO', { name: 'Lido DAO', symbol: 'LDO', imgSrc: 'assets/images/token/ldo.png', rate: '8-15%', address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32', abi: wbtcABI }],
	['QNT', { name: 'Quant', symbol: 'QNT', imgSrc: 'assets/images/token/qnt.png', rate: '9-22%', address: '0x4a220e6096b25eadb88358cb44068a3248254675', abi: wbtcABI }],
	['MANA', { name: 'Decentraland', symbol: 'MANA', imgSrc: 'assets/images/token/mana.png', rate: '9-21%', address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942', abi: wbtcABI }],
	['FTM', { name: 'Fantom', symbol: 'FTM', imgSrc: 'assets/images/token/ftm.png', rate: '8-17%', address: '0x4e15361fd6b4bb609fa63c81a2be19d873717870', abi: wbtcABI }],
	['AAVE', { name: 'Aave', symbol: 'AAVE', imgSrc: 'assets/images/token/aave.png', rate: '8-18%', address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', abi: wbtcABI }],
	['BIT', { name: 'BitDAO', symbol: 'BIT', imgSrc: 'assets/images/token/bit.png', rate: '9-17%', address: '0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5', abi: wbtcABI }],
	['AXS', { name: 'Axie Infinity', symbol: 'AXS', imgSrc: 'assets/images/token/axs.png', rate: '9-19%', address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b', abi: wbtcABI }],
	['SAND', { name: 'The Sandbox', symbol: 'SAND', imgSrc: 'assets/images/token/sand.png', rate: '8-20%', address: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0', abi: wbtcABI }],
	['FLOW', { name: 'Flow', symbol: 'FLOW', imgSrc: 'assets/images/token/flow.png', rate: '4-10%', address: '0x5c147e74D63B1D31AA3Fd78Eb229B65161983B2b', abi: wbtcABI }],
	['RPL', { name: 'Rocket Pool', symbol: 'RPL', imgSrc: 'assets/images/token/rpl.png', rate: '8-17%', address: '0xd33526068d116ce69f19a9ee46f0bd304f21a51f', abi: wbtcABI }],
	['OSMO', { name: 'Osmosis', symbol: 'OSMO', imgSrc: 'assets/images/token/osmo.png', rate: '8-19%', address: '0x93A62Ccfcf1EfCB5f60317981F71ed6Fb39F4BA2', abi: wbtcABI }],
	['HIGH', { name: 'Highstreet', symbol: 'HIGH', imgSrc: 'assets/images/token/high.png', rate: '8-18%', address: '0x71Ab77b7dbB4fa7e017BC15090b2163221420282', abi: wbtcABI }],
	['GALA', { name: 'Gala', symbol: 'GALA', imgSrc: 'assets/images/token/gala.png', rate: '7-18%', address: '0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA', abi: wbtcABI }],
	['LOKA', { name: 'League of Kingdoms', symbol: 'LOKA', imgSrc: 'assets/images/token/loka.png', rate: '9-21%', address: '0x61e90a50137e1f645c9ef4a0d3a4f01477738406', abi: wbtcABI }],
	['DYDX', { name: 'dYdX', symbol: 'DYDX', imgSrc: 'assets/images/token/dydx.png', rate: '8-18%', address: '0x92d6c1e31e14520e676a687f0a93788b716beff5', abi: wbtcABI }],
	['MAGIC', { name: 'Magic', symbol: 'MAGIC', imgSrc: 'assets/images/token/magic.png', rate: '7-16%', address: '0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a', abi: wbtcABI }],
	['GMT', { name: 'STEPN', symbol: 'GMT', imgSrc: 'assets/images/token/gmt.png', rate: '8-17%', address: '0xe3c408bd53c31c085a1746af401a4042954ff740', abi: wbtcABI }],
	['DAO', { name: 'DAO Maker', symbol: 'DAO', imgSrc: 'assets/images/token/dao.png', rate: '7-15%', address: '0x0f51bb10119727a7e5ea3538074fb341f56b09ad', abi: wbtcABI }],
	['CRV', { name: 'Curve DAO Token', symbol: 'CRV', imgSrc: 'assets/images/token/crv.png', rate: '7-16%', address: '0xD533a949740bb3306d119CC777fa900bA034cd52', abi: wbtcABI }],
	['CVX', { name: 'Convex Finance', symbol: 'CVX', imgSrc: 'assets/images/token/cvx.png', rate: '8-19%', address: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b', abi: wbtcABI }],
	['COMP', { name: 'Comp', symbol: 'COMP', imgSrc: 'assets/images/token/comp.png', rate: '7-17%', address: '0xc00e94cb662c3520282e6f5717214004a7f26888', abi: wbtcABI }]
]);