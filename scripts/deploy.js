const { ethers } = require("hardhat")

async function main  () {
    const [deployer] = await ethers.getSigners()
    const MyNFT = await ethers.getContractFactory("MyNFT")
    const myNFT = await MyNFT.deploy()
    console.log(myNFT.address);
}

main().then(() => {
    process.exit(0)
}).catch((err) => {
    console.error(err)
    process.exit(1)
})


//0x96A5f940596ebDB78162b719ed422FCcAB9904E5