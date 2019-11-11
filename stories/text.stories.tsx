import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "../src/text";
import { withInfo } from "@storybook/addon-info";

storiesOf('Text', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <React.Fragment>
      <Text color="xxd" display="h1">Heading 1</Text>
      <Text color="xxd" display="h2">Heading 2</Text>
      <Text color="xxd" display="h3">Heading 3</Text>
      <Text color="xxd" display="h4">Heading 4</Text>
      <Text color="xxd" display="h5">Heading 5</Text>
      <Text color="highlight">Normal text</Text>
      <Text color="m" display="p">Paragraph</Text>
      <Text color="xxd" display="small">Small</Text>
    </React.Fragment>
  )));
