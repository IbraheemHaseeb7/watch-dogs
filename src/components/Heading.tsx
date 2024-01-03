export default function Heading({
  leftText,
  rightText,
  bottomText,
}: {
  leftText: string;
  rightText: string;
  bottomText: string;
}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-start items-center uppercase font-chakra font-bolder">
        <h1 className="m-0 font-bold bg-text-gradient bg-clip-text text-transparent text-[7.188rem]">
          {leftText}
        </h1>
        <h1 className="m-0 font-bold text-[7.188rem]">{rightText}</h1>
      </div>
      <div>
        <p className="text-[2rem] capitalize">{bottomText}</p>
      </div>
    </div>
  );
}
