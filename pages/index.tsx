import {
  useAddress,
  useContract
  //useEditionDrop,
  //useToken,
  //useVote,
} from "@thirdweb-dev/react"

import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react"
import Login from "../components/Login"

//import Proposal from "../components/Proposal"
//import { AddressZero } from "@ethersproject/constants"

export default function Home() {
  const address = useAddress();
  const editionDrop = useContract("0xDfEdC7b73BF9F25616E9eaD688201A351873c2bF", "edition-drop");
  
  //const editionDrop = useContract("0xDfEdC7b73BF9F25616E9eaD688201A351873c2bF", "nft-drop")


  

  //const contract = useContract("0xDfEdC7b73BF9F25616E9eaD688201A351873c2bF", "nft-collection")
  
  

  //contract?.balance

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  /*
  const token = useToken("0x6eefd78C9C73505AA71A13FeE31D9718775c9086")
  const vote = useVote("0x31c5840b31A1F97745bDCbB1E46954b686828E0F")
  */



  
  

  /*
  const [proposals, setProposals] = useState([])
  const [isVoting, setIsVoting] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)
    */




  useEffect(() => {
    if (!address) {
      return
    };

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.contract?.balanceOf(address, 0);

      
        if (balance?.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🎉 You have an NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("🤷‍♂️ You don't have an NFT.");
        }
        

      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get nft balance", error);
      }
    };
    checkBalance();
  }, [address, editionDrop]);



  const mintNft = async () => {
    setIsClaiming(true);
    try {
      await editionDrop.contract?.claim("0", 1);

      setHasClaimedNFT(true);
      console.log("🌊 Successfully Minted the NFT!");
    } catch (error) {
      console.error("failed to claim", error);
    } finally {
      setIsClaiming(false);
    }
  };


  if (!address) {
    return <Login />
  };

  if (hasClaimedNFT) {
    return (
      <div className={styles.container}>
        <h1>You have the DAO Membership NFT!</h1>
      </div>
    )
  };

  return (
    <div className={styles.container}>
      <h2>You are signed in as {address}</h2>
      <h1>Mint your free LogRocket DAO Membership NFT 💳</h1>
      <button
        className={styles.button}
        disabled={isClaiming}
        onClick={() => mintNft()}
      >
        {isClaiming ? "Minting..." : "Mint your NFT (FREE)"}
      </button>
    </div>
  );

};
