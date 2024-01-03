import { MouseEventHandler } from "react";

export default function SignButton({
  text,
  onClick,
  classes,
}: {
  text: string;
  onClick: MouseEventHandler;
  classes?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-button-gradient text-white ${classes}`}
    >
      {text}
    </button>
  );
}
