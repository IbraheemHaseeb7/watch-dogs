export default function UserIcon({ text }: { text: String }) {
  return (
    <div className="w-[49px] h-[49px] bg-white rounded-full flex justify-center items-center">
      <p className="text-black translate-y-[-1px] translate-x-[-1px]">{text}</p>
    </div>
  );
}
