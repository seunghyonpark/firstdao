import { useMetamask } from "@thirdweb-dev/react"
import styles from "../styles/Login.module.css"

const Login = () => {
  const connectWithMetamask = useMetamask()
  return (
    <div>
      <button onClick={connectWithMetamask}>Sign in using MetaMask</button>
    </div>
  )
}
export default Login;


<div className={styles.container}>
  <button className={styles.button} onClick={() => connectWallet("injected")}>
    Sign in using MetaMask
  </button>
</div>