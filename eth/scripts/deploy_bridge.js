async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("ClearingHouse_1");
  const token = await Token.deploy(
    "0x4489E6467B15Ca881F51b80875b6Ab2b0e2Dcd3c"
  );

  console.log("Bridge address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
