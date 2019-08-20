import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar } from "../src/avatar";
import { withInfo } from "@storybook/addon-info";

storiesOf('Avatar', module)
  .add(
    'standard',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
      />
    )),
    {
      notes: {
        markdown: `
          # Avatar component
          ## Any other resources about this component will be added here
        `
      },
    }
  );
