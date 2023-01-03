import React from "react";
import { Page } from "react-onsenui";
import AlertExample from "./AlertExample";
import ButtonExample from "./ButtonExample";
import ActionSheetExample from "./ActionSheetExample";
import CheckboxExample from "./CheckboxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import ProgressbarExample from "./ProgressbarExample";
// import TabExample from "./TabExample";

export default function OnsenUIExample() {
  return (
    <Page>
      <ProgressbarExample />
      <ListExample />
      <CheckboxExample />
      <ActionSheetExample />
      <ButtonExample />
      <FabExample />
      {/* <TabExample/> */}
      <AlertExample />
    </Page>
  );
}
