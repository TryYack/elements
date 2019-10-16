import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Toggle } from "../src/toggle";
import { withInfo } from "@storybook/addon-info";

storiesOf('Toggle', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Toggle 
      on={true}
      onChange={(value: any) => console.log(value)}
    />
  )));
