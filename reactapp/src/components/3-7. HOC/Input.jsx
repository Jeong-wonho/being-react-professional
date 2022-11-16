import React from "react";
import withLoading from "./withLoading";

export function Input() {
  return <input defaultValue="Input" />;
}

export default withLoading(Input);
