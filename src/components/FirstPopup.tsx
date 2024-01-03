import withPopup from "./PopupHOC";
import SignButton from "./SignButton";

function FirstPopup() {
  const points: { key: number; text: string }[] = [
    {
      key: 1,
      text: "Search any wallet addresses on the Eutherium blockchain and understand their NFT activity",
    },
    {
      key: 2,
      text: "Create watchlists, track wallet addresses and get notified when trades often.",
    },
    {
      key: 3,
      text: "Export the wallet data to build your own analysis.",
    },
  ];

  return (
    <div className="w-full bg-white translate-y-[-2rem] rounded-b-3xl text-black px-[2rem] py-[1rem] flex justify-center items-start gap-2 flex-col z-30">
      <h1 className="font-extrabold text-[25px]">Welcome to WatchDogs</h1>
      <p className="text-[#727272] text-[1rem]">Meet your creative copilot</p>
      <p className="font-extrabold mt-2">
        Search and learn with WatchDogs to...
      </p>
      <ol className="text-[#2B2B2B] text-[15px]">
        {points.map(({ key, text }) => {
          return (
            <div key={key} className="flex justify-start items-start gap-2">
              <span>•</span>
              <p>{text}</p>
            </div>
          );
        })}
      </ol>
      <SignButton
        text="Continue"
        onClick={() => {}}
        classes="bg-black w-full h-[2.5rem] rounded mt-[1.5rem]"
      />
      <p className="text-[#9D9A9E] text-[12px] text-center my-2">
        By clicking 'Continue' your agree to our <a>terms</a> and{" "}
        <a>content policy</a>
      </p>
    </div>
  );
}

export default withPopup(FirstPopup, "first_popup.png");
