import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Attachment } from "../src/attachment";
import { withInfo } from "@storybook/addon-info";

storiesOf('Attachment', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Attachment
      layout="compose"
      size={1024}
      mime="image/png"
      uri="https://usepanda.com/img/source-icons/theNextWeb.png"
      name="Uploaded image.png"
    />
  )));
