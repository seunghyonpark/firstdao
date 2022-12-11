import sdk from "./initialize-sdk.js";

/*
const editionDrop = sdk.getEditionDrop(
  "EDITION_ADDRESS"
);
*/

const editionDrop = await sdk.getContract("0xDfEdC7b73BF9F25616E9eaD688201A351873c2bF", "edition-drop");


//const token = sdk.getToken("TOKEN_ADDRESS");

const token = await sdk.getContract("0xC989a3C8c251dA8180D172a14327F2fC1D6e6C67", "token");



(async () => {
  try {
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, ask yourfriends to claim some free NFTs!"
      );
      process.exit(0);
    }

    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      );
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };
      return airdropTarget;
    });
    
    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log(
      "✅ Successfully airdropped tokens to all the holders of the NFT!"
    );
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();
