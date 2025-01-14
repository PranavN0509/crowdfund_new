const hre = require("hardhat");

async function main() {
    const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory")
    const campaignFactory = await CampaignFactory.deploy()

    await campaignFactory.waitForDeployment()
    console.log("Factory deployed to: ", await campaignFactory.getAddress())

}

main()
    .then(() => {
        process.exit(0)})
    .catch((error)=>{
        console.log(error)
        process.exit(1)
    });