import { User } from "../types/User";
import { useDispatch } from "react-redux";
import { setUser } from "../state/userSlice";

export function useSignedIn() {
  let user: User | null = JSON.parse(window.localStorage.getItem("user")!);

  const dispatch = useDispatch();
  // if user exists then update the state
  if (user) {
    dispatch(
      setUser({
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        credits: user.credits,
      })
    );
  } else {
    // write user details in local storage
    window.localStorage.setItem(
      "user",
      JSON.stringify({
        fname: "Romain",
        lname: "Bernus",
        email: "romain.bernus@gmail.com",
        credits: 30,
      })
    );
  }

  return [user !== null];
}
