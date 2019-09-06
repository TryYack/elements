import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { Button } from "../src/button";
import { withInfo } from "@storybook/addon-info";

storiesOf('Button', module)
  .add(
    'Long text',
    withInfo({ inline: true })(() => (
      <Button
        text="This is some long text being hidden"
        onClick={action('clicked')}
      />
    )));

  storiesOf('Button', module)
    .add(
      'Normal text',
      withInfo({ inline: true })(() => (
        <Button
          text="Click Here"
          onClick={action('clicked')}
        />
      )));

  storiesOf('Button', module)
    .add(
      'Muted coloring',
      withInfo({ inline: true })(() => (
        <Button
          theme="muted"
          text="Click Here"
          onClick={action('clicked')}
        />
      )));

  storiesOf('Button', module)
    .add(
      'Blue coloring',
      withInfo({ inline: true })(() => (
        <Button
          theme="blue"
          text="Click Here"
          onClick={action('clicked')}
        />
      )));

  storiesOf('Button', module)
    .add(
      'Danger coloring',
      withInfo({ inline: true })(() => (
        <Button
          theme="danger"
          text="Click Here"
          onClick={action('clicked')}
        />
      )));

  storiesOf('Button', module)
    .add(
      'Bordered',
      withInfo({ inline: true })(() => (
        <Button
          outline={true}
          theme="danger"
          text="Click Here"
          onClick={action('clicked')}
        />
      )));

  storiesOf('Button', module)
    .add(
      'Jumbo',
      withInfo({ inline: true })(() => (
        <Button
          jumbo={true}
          text="Click Here"
          onClick={action('clicked')}
        />
      )));

  storiesOf('Button', module)
    .add(
      'Jumbo muted bordered',
      withInfo({ inline: true })(() => (
        <Button
          jumbo={true}
          outline ={true}
          theme="muted"
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
