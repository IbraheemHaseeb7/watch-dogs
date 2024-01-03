export default function FormLine({ text }: { text: string }) {
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <div className="w-[40%] h-[1px] bg-[#686767]"></div>
      <p className="text-[#686767] text-[12px]">{text}</p>
      <div className="w-[40%] h-[1px] bg-[#686767]"></div>
    </div>
  );
}
