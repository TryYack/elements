import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Attachment } from "../src/attachment";
import { withInfo } from "@storybook/addon-info";

storiesOf('Attachment', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <div style={{ width: 300 }}>
      <Attachment
        size={1024}
        mime="image/png"
        uri="https://usepanda.com/img/source-icons/theNextWeb.png"
        name="Uploaded image.png"
      />
    </div>
  )))
  .add(
  'With image preview',
  withInfo({ inline: true })(() => (
    <div style={{ width: 300 }}>
      <Attachment
        size={12024}
        mime="image/png"
        uri="https://usepanda.com/img/source-icons/theNextWeb.png"
        preview="https://usepanda.com/img/source-icons/theNextWeb.png"
        name="Uploaded image.png"
        onPreviewClick={() => console.log('Preview')}
      />
    </div>
  )))
  .add(
  'With video preview',
  withInfo({ inline: true })(() => (
    <div style={{ width: 300 }}>
      <Attachment
        size={12024}
        mime="video/mp4"
        preview="https://yack-users.s3-us-west-2.amazonaws.com/12-10-2019/8e40ffd0-ed28-11e9-b424-1d6c0b83f80c.small-1.mp4"
        uri="https://yack-users.s3-us-west-2.amazonaws.com/12-10-2019/8e40ffd0-ed28-11e9-b424-1d6c0b83f80c.small-1.mp4"
        name="Uploaded image.png"
      />
    </div>
  )));
