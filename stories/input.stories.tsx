import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "../src/input";
import { withInfo } from "@storybook/addon-info";

storiesOf('Input', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Input
      label="Full name"
      value="Type name"
      onChange={(e: any) => console.log(e.target.value)}
      placeholder="Enter full name"
    />
  )))
  .add(
  'Large',
  withInfo({ inline: true })(() => (
    <Input
      label="Full name"
      inputSize="large"
      value="Type name"
      onChange={(e: any) => console.log(e.target.value)}
      placeholder="Enter full name"
    />
  )))
  .add(
  'With no label',
  withInfo({ inline: true })(() => (
    <Input
      value="Type name"
      onChange={(e: any) => console.log(e.target.value)}
      placeholder="Enter full name"
    />
  )));
