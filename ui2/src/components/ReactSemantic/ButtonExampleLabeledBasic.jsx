import React from "react";
// import { Button, Icon, Label } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

const ButtonExampleLabeledBasic = () => (
  <>
    <Input
      action={{
        icon: "search",
        onClick: () => console.log("An action was clicked!"),
      }}
      actionPosition="left"
      placeholder="Search..."
    />
    {/* <Button as="div" labelPosition="right">
      <Button color="red">
        <Icon name="heart" />
        Like
      </Button>
      <Label as="a" basic color="red" pointing="left">
        2,048
      </Label>
    </Button>
    <Button as="div" labelPosition="right">
      <Button basic color="blue">
        <Icon name="fork" />
        Fork
      </Button>
      <Label as="a" basic color="blue" pointing="left">
        2,048
      </Label>
    </Button>
    <Button basic>Standard</Button>
    <Button basic color="red">
      Red
    </Button>
    <Button basic color="orange">
      Orange
    </Button>
    <Button basic color="yellow">
      Yellow
    </Button>
    <Button basic color="olive">
      Olive
    </Button>
    <Button basic color="green">
      Green
    </Button>
    <Button basic color="teal">
      Teal
    </Button>
    <Button basic color="blue">
      Blue
    </Button>
    <Button basic color="violet">
      Violet
    </Button>
    <Button basic color="purple">
      Purple
    </Button>
    <Button basic color="pink">
      Pink
    </Button>
    <Button basic color="brown">
      Brown
    </Button>
    <Button basic color="grey">
      Grey
    </Button>
    <Button basic color="black">
      Black
    </Button>
    <Button color="facebook">
      <Icon name="facebook" /> Facebook
    </Button>
    <Button color="twitter">
      <Icon name="twitter" /> Twitter
    </Button>
    <Button color="google plus">
      <Icon name="google plus" /> Google Plus
    </Button>
    <Button color="vk">
      <Icon name="vk" /> VK
    </Button>
    <Button color="linkedin">
      <Icon name="linkedin" /> LinkedIn
    </Button>
    <Button color="instagram">
      <Icon name="instagram" /> Instagram
    </Button>
    <Button color="youtube">
      <Icon name="youtube" /> YouTube
    </Button> */}
  </>
);

export default ButtonExampleLabeledBasic;
