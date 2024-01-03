import { MouseEventHandler } from "react";

export default function WalletButton({
  text,
  onClick,
  classes,
  icon,
}: {
  text: string;
  onClick: MouseEventHandler;
  classes?: string;
  icon: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-start items-center gap-4 bg-[#151515] border-[1px] rounded-xl pl-[1rem] h-[3rem] ${classes}`}
    >
      <img src={icon} alt="logo" />
      <p className="text-white text-[14px] font-extrabold">{text}</p>
    </button>
  );
}
