import { useMoralis } from "react-moralis";
const ButtonLogin = () => {
    const { authenticate, isAuthenticated,logout, user} = useMoralis();
    return (
        <>
            {isAuthenticated ? (
                <>
                    <h2>Welcome {user.get("username")}</h2>
                    <h2>Your wallet address is {user.get("ethAddress")}</h2>
                    {localStorage.setItem('address', user.get("ethAddress"))}
                    <button onClick={logout}>
                        Logout
                    </button></>)
                : (
                    <button onClick={() => {
                        authenticate({ provider: "metamask" });
                    }}>
                        Sign in with MetaMask
                    </button>
                )}
        </>)
}
export default ButtonLogin;