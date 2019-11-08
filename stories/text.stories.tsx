import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "../src/text";
import { withInfo } from "@storybook/addon-info";

storiesOf('Text', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Text color="xxd" display="h2">Dark color</Text>
  )));
