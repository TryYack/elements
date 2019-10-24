import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar } from "../src/avatar";
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';

storiesOf('Avatar', module)
  .add(
    'Dark themed',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        dark={true}
      />
    ))
  )
  .add(
    'Outline inner/outer color & text color',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        outlineInnerColor="red"
        outlineOuterColor="white"
        textColor="red"
      />
    ))
  )
  .add(
    'With badge',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        textColor="red"
        badge={true}
        size="large"
      />
    ))
  )
  .add(
    'Coloring (auto)',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        color="#FC1449"
      />
    ))
  )
  .add(
    'With a badge',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        heartbeat={new Date()}
      />
    ))
  )
  .add(
    'Large sizing',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        size="large"
      />
    ))
  )
  .add(
    'No image & click (default)',
    withInfo({ inline: true })(() => (
      <Avatar
        onClick={action('Clicked')}
        title="Jon Doe"
      />
    ))
  )
  .add(
    'With image',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        outlineInnerColor="black"
        outlineOuterColor="white"
        size="large"
        image="https://randomuser.me/api/portraits/men/62.jpg"
      />
    ))
  )
  .add(
    'With children',
    withInfo({ inline: true })(() => (
      <Avatar
        title="Jon Doe"
        size="large">
        <div style={{ color: 'red', fontSize: 20 }}>✓</div>
      </Avatar>
    ))
  )
  .add(
    'With delete',
    withInfo({ inline: true })(() => (
      <Avatar
        onDeleteClick={action('Delete #42')}
        deleteIcon={<span style={{ color: 'white', fontSize: 15 }}>x</span>}
        title="Jon Doe"
        size="large"
      />
    ))
  )
  .add(
    'With edit',
    withInfo({ inline: true })(() => (
      <Avatar
        onEditClick={action('Delete #42')}
        editIcon={<div style={{ color: '#00ABF0', fontSize: 20 }}>✎</div>}
        title="Jon Doe"
        size="large"
      />
    ))
  );
