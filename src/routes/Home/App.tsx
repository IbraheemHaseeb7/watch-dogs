import "./App.css";
import Heading from "../../components/Home/Heading";
import Navbar from "../../components/Gerneral/Navbar";
import SearchAndLogo from "../../components/Home/SearchAndLogo";
import SecondPopup from "../../components/Popups/SecondPopup";

function App() {
  return (
    <main className="w-full h-screen mt-[10rem]">
      <Navbar
        user={{
          email: "romain.bernus@gmail.com",
          credits: 10,
          fname: "Romain",
          lname: "Bernus",
        }}
        // user={null}
      />
      {/* <SecondPopup /> */}
      <div className="w-full flex justify-center items-center">
        <Heading
          leftText="watch"
          rightText="dogs"
          bottomText="we know what you do in the dark..."
        />
      </div>
      <SearchAndLogo buttonText="Generate" imgLink="homepage_logo.png" />
      {/* <div className="h-[100rem]"></div> */}
    </main>
  );
}

export default App;
