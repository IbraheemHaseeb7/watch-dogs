import { ComponentType } from "react";

const withPopup = (WrappedComponent: ComponentType, img: string) => {
  return (props: any) => {
    const addedProps = { ...props, img };

    return (
      <>
        <div className="w-full h-screen fixed top-0 left-0 z-10 flex justify-center items-center">
          <div className="w-[25rem] overflow-hidden flex justify-center items-center flex-col z-30">
            <img className="z-30" src={img} alt="image.png" />
            {/* background shadow */}
            <div className="w-full h-screen bg-black z-10 fixed top-0 left-0 opacity-80"></div>
            <WrappedComponent {...addedProps} />
          </div>
        </div>
      </>
    );
  };
};

export default withPopup;
