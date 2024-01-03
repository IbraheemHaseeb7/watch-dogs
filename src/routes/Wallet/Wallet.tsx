import { useNavigate } from "react-router-dom";
import withExtraProps from "../../components/Sign/SignHOC";
import WalletButton from "../../components/Sign/WalletButton";

function Wallet() {
  const nav = useNavigate();

  return (
    <main className="w-[25rem] mt-2">
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <WalletButton
          onClick={() => {}}
          text="Install Metamask"
          icon="metamask.png"
        />
        <WalletButton
          onClick={() => {}}
          text="Coinbase Wallet"
          icon="coinbase.png"
        />
        <WalletButton
          onClick={() => {}}
          text="WalletConnect"
          icon="walletconnect.png"
        />
        <button
          style={{ color: "#494848" }}
          className="my-5 underline"
          onClick={() => nav("/")}
        >
          I'll do it later
        </button>
        <p className="text-[#949292] text-center text-[14px]">
          By connecting a wallet, you agree to WatchDogs’{" "}
          <a>Terms of Service</a>
          and consent to its <a>Privacy Policy. </a>
        </p>
      </div>
    </main>
  );
}

export default withExtraProps(Wallet, "Connect your wallet");
