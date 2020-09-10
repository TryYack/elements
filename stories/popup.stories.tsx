import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Popup } from "../src/popup";
import { Button } from "../src/button";
import { withInfo } from "@storybook/addon-info";

storiesOf('Popup', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <Popup
      visible={true}
      handleDismiss={() => console.log('Dismiss')}
      width={300}
      direction="left-top"
      content={
        <div style={{ padding: 50, fontFamily: 'system', }}>
          Content for the popup
        </div>
      }>
        <Button text="Popup" />
    </Popup>
  )))
  .add(
    'Very tall content',
    withInfo({ inline: true })(() => (
      <Popup
        visible={true}
        handleDismiss={() => console.log('Dismiss')}
        width={300}
        direction="left-bottom"
        content={
          <div 
            className="row"
            style={{ 
              padding: 50, 
              fontFamily: 'system', 
              height: 500, 
              background: '#EDEDED' 
            }}>
            Content for the popup
          </div>
        }>
          <Button text="Popup" />
      </Popup>
    )));
