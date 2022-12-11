import { ethers } from "ethers"
import sdk from "./initialize-sdk.js"

//const tokenModule = sdk.getTokenModule("0x4FFFFA004586Df6cc242e736619efeC9fC6354ce")

const token = await sdk.getContract("0xC989a3C8c251dA8180D172a14327F2fC1D6e6C67", "token");



(async () => {
  try {
    const amount = 5000.7;

    
    //const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

    /*
    await token.mint(amountWith18Decimals);
    */
  

    await token.mintTo("0xd31613909C3eCCbd8016eD07B17Bd27411aFE57D", amount);

    const totalSupply = await token.totalSupply();

    
    console.log(
      "✅ There now is",
      
      //ethers.utils.formatUnits(totalSupply, 18),

      totalSupply.displayValue,

      "$LR in circulation"
    );
    

  } catch (error) {
    console.error("Failed to mint tokens", error);
  }

})()