// the purpose of this component is to run any piece of code
// that we want to run at the starting of website each and every time

import { useSignedIn } from "../../hooks/useSignedIn";

export default function SignedIn() {
  useSignedIn();
  return <></>;
}
