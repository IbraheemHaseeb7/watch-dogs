import { MouseEventHandler } from "react";

export default function SignHollowButtonWithIcon({
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
      className={`flex justify-start items-center gap-4 bg-transparent border-[1px] border-[rgba(0,0,0,0.23)] rounded pl-[1rem] ${classes}`}
    >
      <img src={icon} alt="logo" />
      <p className="text-black text-[14px]">{text}</p>
    </button>
  );
}
