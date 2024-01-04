import "./App.css";
import Heading from "../../components/Home/Heading";
import Navbar from "../../components/Gerneral/Navbar";
import SearchAndLogo from "../../components/Home/SearchAndLogo";

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
      <div className="w-full flex justify-center items-center">
        <Heading
          leftText="watch"
          rightText="dogs"
          bottomText="we know what you do in the dark..."
        />
      </div>
      <SearchAndLogo buttonText="Generate" imgLink="homepage_logo.png" />
    </main>
  );
}

export default App;
