import { ComponentType } from "react";

const withDashboard = (
  WrappedComponent: ComponentType,
  mainText: String,
  secondaryText?: string,
  fixedHeight?: string
) => {
  return (props: any) => {
    const combinedProps = { ...props, mainText, secondaryText };

    return (
      <div
        className={`w-full bg-[#333639] rounded-xl p-5 font-dmsans ${fixedHeight} flex flex-col gap-10`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[2.5rem] max-md:text-[1.75rem]">{mainText}</h1>
          {secondaryText && (
            <p className="max-md:text-[0.5rem]">{secondaryText}</p>
          )}
        </div>
        <WrappedComponent {...combinedProps} />
      </div>
    );
  };
};

export default withDashboard;
