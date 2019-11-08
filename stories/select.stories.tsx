import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "../src/select";
import { withInfo } from "@storybook/addon-info";

storiesOf('Select', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Select
      onSelect={(item: any) => console.log('Selected', item)}
      selected={2}
      list={[
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'Four', value: 4 },
        { text: 'Five', value: 5 },
      ]}
    />
  )));
