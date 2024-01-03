import { ComponentType } from "react";
import { Link } from "react-router-dom";

const withExtraProps = (WrappedComponent: ComponentType, title: string) => {
  return (props: any) => {
    const extraProps: { title: string } = { title };
    const propsWithExtraProps = { ...props, ...extraProps };

    // Applying styling
    return (
      <main className="bg-white w-full h-screen flex justify-center items-center">
        <Link to={"/"}>
          <img
            src="navbar_logo.png"
            alt="logo"
            className="fixed top-10 left-[50%] translate-x-[-50%]"
          />
        </Link>
        <div className="flex justify-center items-center flex-col w-[50%]">
          <h1 className="text-black font-extrabold text-[2rem]">
            {extraProps.title}
          </h1>
          <WrappedComponent {...propsWithExtraProps} />
        </div>
      </main>
    );
  };
};

export default withExtraProps;
