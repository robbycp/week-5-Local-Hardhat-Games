// add the game address here and update the contract name if necessary
const gameAddr = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    await game.giveMeAllowance(20000)
    await game.mint(15000)
    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
