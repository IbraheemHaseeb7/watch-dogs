import { TextField } from "@mui/material";
import withExtraProps from "../../components/SignHOC";
import React, { useEffect, useState } from "react";
import "./SignUp.css";
import SignButton from "../../components/SignButton";
import { Link } from "react-router-dom";
import FormLine from "../../components/FormLine";
import SignHollowButtonWithIcon from "../../components/SignHollowButtonWithIcon";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [inputValues, setInputValue] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [isValidInput, setIsValidInput] = useState<{
    email: boolean;
    password: boolean;
  }>({ email: false, password: false });

  useEffect(() => {
    // checking if email is valid
    if (checkValidEmail(inputValues.email))
      setIsValidInput({ ...isValidInput, email: true });
    else setIsValidInput({ ...isValidInput, email: false });
  }, [inputValues.email]);

  useEffect(() => {
    // checking if password is of valid length or not
    if (inputValues.password.length > 7)
      setIsValidInput({ ...isValidInput, password: true });
    else setIsValidInput({ ...isValidInput, password: false });
  }, [inputValues.password]);

  function handleChange(e: any) {
    e.preventDefault();

    // setting the state
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  }

  // checks if the email is valid using regex or not
  function checkValidEmail(email: string): boolean {
    const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return validEmailRegex.test(email);
  }

  // creating navigator
  const nav = useNavigate();

  // handles continue button click
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (isValidInput.email && isValidInput.password) {
      nav("/verify-email");
    } else {
      toast.error("Either email or password is wrong");
    }
  }

  return (
    <main className="w-[20rem] mt-[1rem] flex justify-center items-center gap-2 flex-col">
      <TextField
        name="email"
        placeholder="Email address"
        onChange={handleChange}
        variant="outlined"
        fullWidth
        label="Email Address"
        InputLabelProps={{ color: isValidInput.email ? "secondary" : "error" }}
      />
      {inputValues.email !== "" && (
        <TextField
          name="password"
          placeholder="Password"
          onChange={handleChange}
          variant="outlined"
          fullWidth
          label="Password"
          InputLabelProps={{
            color: isValidInput.password ? "secondary" : "error",
          }}
          type="password"
        />
      )}
      <SignButton
        onClick={handleClick}
        text="Continue"
        classes="w-full h-[3.5rem] rounded"
      />
      <p className="text-[#4E4C4C] text-[12px] w-full flex justify-center items-center">
        Already have an account?{" "}
        <Link to={"/sign-in"}>
          <span className="text-[#9C41BD]">Log in</span>
        </Link>
      </p>
      {inputValues.email === "" && (
        <>
          <FormLine text="OR" />
          <SignHollowButtonWithIcon
            text="Continue With Google"
            onClick={() => {}}
            icon="google.png"
            classes="w-full h-[3.5rem]"
          />
          <SignHollowButtonWithIcon
            text="Continue With Microsoft Account"
            onClick={() => {}}
            icon="microsoft.png"
            classes="w-full h-[3.5rem]"
          />
        </>
      )}
    </main>
  );
}

export default withExtraProps(SignUp, "Create your account");
