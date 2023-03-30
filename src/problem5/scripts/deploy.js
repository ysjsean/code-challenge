async function main() {
    const Utility = await ethers.getContractFactory("Utility");

    // Start deployment, returning a promise that resolves to a contract object
    const utility_contract = await Utility.deploy();
    console.log("Contract deployed to address:", utility_contract.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});