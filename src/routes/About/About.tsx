import { TextField } from "@mui/material";
import withExtraProps from "../../components/SignHOC";
import React, { useState } from "react";
import SignButton from "../../components/SignButton";
import { useNavigate } from "react-router-dom";

function About() {
  const [inputValues, setInputValues] = useState<{
    fname: string;
    lname: string;
  }>({ fname: "", lname: "" });

  const nav = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }

  return (
    <main className="w-[24rem] flex justify-center items-center flex-col gap-4 mt-[1rem]">
      <div className="flex justify-between items-center gap-2 w-full">
        <TextField
          name="fname"
          placeholder="First Name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
          label="First Name"
          InputLabelProps={{
            color: "secondary",
          }}
        />
        <TextField
          name="lname"
          placeholder="Last Name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
          label="Last Name"
          InputLabelProps={{
            color: "secondary",
          }}
        />
      </div>
      <SignButton
        onClick={() => nav("/wallet")}
        text="Continute"
        classes="w-full h-[3.5rem] rounded bg-button-gradient"
      />
      <p className="text-[#949292] text-[14px] text-center">
        By clicking ‘Continue”, you agree to our <a>Terms</a> and confrim you’re
        18 years or older.
      </p>
    </main>
  );
}

export default withExtraProps(About, "What should we call you?");
