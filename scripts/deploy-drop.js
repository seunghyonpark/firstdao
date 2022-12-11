import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "LogRocket DAO", // Name of NFT Collection for DAO
      description: "A DAO for all the LogRocket readers.", // Description
      image: "", // PFP for NFT collection
      primary_sale_recipient: ethers.constants.AddressZero,
    });

    //const editionDrop = sdk.getEditionDrop(editionDropAddress);
    const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");

    const metadata = await editionDrop.metadata.get();
    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress
    );

    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();