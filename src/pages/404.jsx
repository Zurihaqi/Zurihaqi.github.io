import { useEffect } from "react";
import { navigate } from "@reach/router";

export default function Page404() {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
}
