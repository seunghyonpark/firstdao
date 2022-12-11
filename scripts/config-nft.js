import sdk from "./initialize-sdk.js";

//const editionDrop = sdk.getEditionDrop("EDITION_DROP_ADDDRESS");

const editionDrop = await sdk.getContract("0xDfEdC7b73BF9F25616E9eaD688201A351873c2bF", "edition-drop");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "LogRocket DAO", // Name of NFT Collection for DAO
        description: "A DAO for all the LogRocket readers.", // Description
        image: "image_address", // Image for NFT
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();