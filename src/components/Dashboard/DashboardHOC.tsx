import { ComponentType } from "react";

const withDashboard = (
  WrappedComponent: ComponentType,
  mainText: String,
  fullWidth: boolean,
  secondaryText?: string
) => {
  return (props: any) => {
    const combinedProps = { ...props, mainText, secondaryText };

    return (
      <div
        className={`${
          fullWidth ? "w-full" : "w-1/2"
        } bg-[#333639] rounded-xl p-5`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[2.5rem]">{mainText}</h1>
          {secondaryText && <p>{secondaryText}</p>}
        </div>
        <WrappedComponent {...combinedProps} />
      </div>
    );
  };
};

export default withDashboard;
