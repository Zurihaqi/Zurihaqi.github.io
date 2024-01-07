import { useEffect } from "react";
import { navigate } from "@reach/router";

export default function Page404() {
  // Redirect user to home
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
}
