import React, { useState } from "react";
import { Button } from "react-onsenui";
import { Toast } from "react-onsenui";
import { Page } from "react-onsenui";
import { Tab } from "react-onsenui";
import { Tabbar } from "react-onsenui";

export default function TabExample() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(open ? false : true);
  };
  return (
    <Tabbar
      onPreChange={({ index }) => setIndex(index)}
      onPostChange={() => console.log("postChange")}
      onReactive={() => console.log("postChange")}
      position="bottom"
      index={index}
      renderTabs={(activeIndex, tabbar) => [
        {
          content: (
            <Page title="Home" active={activeIndex === 0} tabbar={tabbar}>
              <Button onClick={handleClick}>open</Button>
              <Toast isOpen={open}>hi</Toast>
            </Page>
          ),
          tab: <Tab label="Home" icon="md-home" />,
        },
        {
          content: (
            <Page title="Settings" active={activeIndex === 1} tabbar={tabbar} />
          ),
          tab: <Tab label="Settings" icon="md-settings" />,
        },
      ]}
    />
  );
}
