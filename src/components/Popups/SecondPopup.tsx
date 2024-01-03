import withPopup from "./PopupHOC";
import SignButton from "../Sign/SignButton";

function FirstPopup() {
  return (
    <div className="w-full bg-white translate-y-[-2rem] rounded-b-3xl text-black px-[2rem] py-[1rem] flex justify-center items-start gap-2 flex-col z-30">
      <p className="text-[14px] text-[#2B2B2B] text-center w-full">
        10 Credits
      </p>
      <p className="text-[14px] text-[#2B2B2B]">
        You get 50 free credits during your first month, and 15 free credits
        will refill every month after that.{" "}
      </p>
      <p className="text-[14px] text-[#2B2B2B]">
        You can always buy additional credits.{" "}
        <span className="text-black font-extrabold">Learn More</span>
      </p>
      <SignButton
        text="Start tracking with WatchDogs"
        onClick={() => {}}
        classes="bg-[#5D5C5E] w-full h-[2.5rem] rounded my-[1.5rem]"
      />
    </div>
  );
}

export default withPopup(FirstPopup, "second_popup.png");
