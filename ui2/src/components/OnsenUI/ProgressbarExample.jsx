import React from "react";
import { ProgressCircular } from "react-onsenui";
import { ProgressBar } from "react-onsenui";

export default function ProgressbarExample() {
  return (
    <>
      <ProgressCircular value={55} secondaryValue={87} />
      <ProgressCircular indeterminate />
      <ProgressBar value={55} secondaryValue={87} />
      <ProgressBar indeterminate />
    </>
  );
}
