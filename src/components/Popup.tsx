export default function Popup({ img }: { img: string }) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] z-10">
      <div className="w-[30.75rem] rounded-2xl z-20 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%]">
        <img src={img} alt="image.png" />
      </div>
      {/* background shadow */}
      <div className="w-full h-screen bg-black z-20 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
  );
}
