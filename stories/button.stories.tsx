import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { Button } from "../src/button";
import { withInfo } from "@storybook/addon-info";

storiesOf('Button', module)
  .add(
    'standard',
    withInfo({ inline: true })(() => (
      <Button
        text="Click Me"
        onClick={action('clicked')}
      />
    )),
    {
      notes: {
        markdown: `
          # Button component
          ## Any other resources about this component will be added here
        `
      },
    }
  );
