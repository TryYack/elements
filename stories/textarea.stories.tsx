import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Textarea } from "../src/textarea";
import { withInfo } from "@storybook/addon-info";

storiesOf('Textarea', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Textarea
      label="Description"
      value="Some text value"
      onChange={(e: any) => console.log(e.target.value)}
      placeholder="Add a description"
      rows={8}
    />
  )))
  .add(
  'Large',
  withInfo({ inline: true })(() => (
    <Textarea
      label="Description"
      textareaSize="large"
      value="Some text value"
      onChange={(e: any) => console.log(e.target.value)}
      placeholder="Add a description"
      rows={8}
    />
  )));
