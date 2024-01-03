import "./App.css";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SearchAndLogo from "../../components/SearchAndLogo";
import Popup from "../../components/Popup";

function App() {
  return (
    <main className="w-full h-screen mt-[10rem]">
      <Navbar
        user={{
          username: "Romain Bernus",
          email: "romain.bernus@gmail.com",
          credits: 10,
          fname: "Romain",
          lname: "Bernus",
        }}
        // user={null}
      />
      <Popup img="first_popup.png" />
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
