import Search from "../Gerneral/Search";

export default function SearchAndLogo({ imgLink }: { imgLink: string }) {
  return (
    <div className="flex justify-center items-center w-full relative top-[15rem]">
      <img
        src={imgLink}
        alt="HomePage Logo"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"
      />
      <Search buttonText="Generate" />
    </div>
  );
}
