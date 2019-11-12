import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Modal } from "../src/modal";
import { withInfo } from "@storybook/addon-info";

storiesOf('Modal', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Modal
      title="Channel"
      width={700}
      height="90%"
      onClose={() => console.log('Close')}
      footer={(
        <div>Footer</div>
      )}
    />
  )))
  .add(
  'Frameless',
  withInfo({ inline: true })(() => (
    <Modal
      title="Channel"
      width={700}
      frameless={true}
      height="90%"
      onClose={() => console.log('Close')}
    />
  )));
