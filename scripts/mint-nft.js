require("dotenv").config()
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
console.log(JSON.stringify(contract.abi));
const contractAddress = "0x96A5f940596ebDB78162b719ed422FCcAB9904E5"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)
miniNFT = async () => {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") // get latest nonce

    // the transaction
    const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: nftContract.methods.miniNFT(PUBLIC_KEY, tokenURI).encodeABI()

    }

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise.then((signedTx) => {
        web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            (err, hash) => {
                if (!err) {
                    console.log("The hash of trasaction is :", hash, "\nCheck alchemy's mempool to view the status of your trasaction");


                }
                else {
                    console.log(
                        "Something went wrong when submitting your transaction : ",
                        err
                    )
                }
            }
        )
    }).catch((err) => {
        console.log("Promise failed ", err);
    })
}

miniNFT("")