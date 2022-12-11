import {
  useAddress,
  //useEditionDrop,
  //useToken,
  //useVote,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Login from "../components/Login";
//import Proposal from "../components/Proposal";
import styles from "../styles/Home.module.css";
import { AddressZero } from "@ethersproject/constants";

export default function Home() {
  const address = useAddress();

  /*
  const editionDrop = useEditionDrop(
    "0x2f66A5A2BCB272FFC9EB873E3482A539BEB6f02a"
  );
  const token = useToken("0x6eefd78C9C73505AA71A13FeE31D9718775c9086");
  const vote = useVote("0x31c5840b31A1F97745bDCbB1E46954b686828E0F");
  */

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  const [proposals, setProposals] = useState([]);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);



  if (!address) {
    return <Login />;
  }

  return (
    <div className={styles.container}>
      <h1>{address}</h1>
      <h1>Mint your free LogRocket DAO Membership NFT 💳</h1>
      <button
        className={styles.button}
        disabled={isClaiming}
        //onClick={() => mintNft()}
      >
        {isClaiming ? "Minting..." : "Mint your NFT"}
      </button>
    </div>
  );
}
