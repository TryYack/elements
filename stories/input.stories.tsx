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
  )));
