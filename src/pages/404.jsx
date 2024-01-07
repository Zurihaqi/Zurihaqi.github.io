import * as React from "react";

export default function Page404() {
  if (typeof window !== "undefined") {
    window.location = "/";
  }

  return null;
}
