import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Notification } from "../src/notification";
import { withInfo } from "@storybook/addon-info";

storiesOf('Notification', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Notification 
      text="Notification text" 
    />
  )));
