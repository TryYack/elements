import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Tabbed } from "../src/tabbed";
import { withInfo } from "@storybook/addon-info";

storiesOf('Tabbed', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Tabbed
      start={0}
      footer={<div>This is the tab footer area</div>}
      panels={[
        {
          title: 'Profile',
          show: true,
          content: (
            <div style={{ flex: 1, height: "100%", width: "100%" }}>
              Profile content
            </div>
          )
        },
        {
          title: 'Accounts',
          show: true,
          content: (
            <div style={{ flex: 1, height: "100%", width: "100%" }}>
              Account content
            </div>
          )
        }
      ]}
    />
  )))
  .add(
  'Large with subtitle & no border',
  withInfo({ inline: true })(() => (
    <Tabbed
      size="large"
      borderless={true}
      start={0}
      panels={[
        {
          title: 'Profile',
          subtitle: 'Something below',
          show: true,
          content: (
            <div style={{ flex: 1, height: "100%", width: "100%" }}>
              Profile content
            </div>
          )
        },
        {
          title: 'Accounts',
          show: true,
          content: (
            <div style={{ flex: 1, height: "100%", width: "100%" }}>
              Account content
            </div>
          )
        }
      ]}
    />
  )));
