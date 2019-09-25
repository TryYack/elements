import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { Button } from "../src/button";
import { withInfo } from "@storybook/addon-info";

storiesOf('Button', module)
  .add(
  'Normal text',
  withInfo({ inline: true })(() => (
    <Button
      text="Toggle"
      onClick={action('clicked')}
    />
  )))
  .add(
  'No text',
  withInfo({ inline: true })(() => (
    <Button
      icon={<div style={{ fontSize: 20 }}>✓</div>}
      onClick={action('clicked')}
    />
  )))
  .add(
  'Disabled',
  withInfo({ inline: true })(() => (
    <Button
      disabled={true}
      text="This button is disabled"
      onClick={action('clicked')}
    />
  )))
  .add(
  'Overflow text',
  withInfo({ inline: true })(() => (
    <Button
      text="This is some long text"
      onClick={action('clicked')}
    />
  )))
  .add(
  'With icon',
  withInfo({ inline: true })(() => (
    <Button
      icon={<div style={{ fontSize: 20 }}>✓</div>}
      text="Click Here"
      onClick={action('clicked')}
    />
  )))
  .add(
    'Blue outline theme',
    withInfo({ inline: true })(() => (
      <Button
        theme="blue-outline"
        text="Click Here"
        onClick={action('clicked')}
      />
    )))
  .add(
    'Red theme',
    withInfo({ inline: true })(() => (
      <Button
        theme="red"
        text="Click Here"
        onClick={action('clicked')}
      />
    )))
  .add(
    'Small',
    withInfo({ inline: true })(() => (
      <Button
        size="small"
        theme="blue-border"
        text="Manage Members"
        onClick={action('clicked')}
      />
    )))
  .add(
    'Large',
    withInfo({ inline: true })(() => (
      <Button
        size="large"
        text="Click Here"
        onClick={action('clicked')}
      />
    )))
  .add(
    'Large with icon',
    withInfo({ inline: true })(() => (
      <Button
        icon={<div style={{ fontSize: 30 }}>✓</div>}
        size="large"
        text="Click Here"
        onClick={action('clicked')}
      />
    )));

    /*

      Template:

      storiesOf('Button', module)
        .add(
          'medium',
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
    */
