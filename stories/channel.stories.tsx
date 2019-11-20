import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Channel } from "../src/channel";
import { withInfo } from "@storybook/addon-info";

storiesOf('Channel', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <div style={{ width: 300, backgroundColor: '#0C1828' }}>
      <Channel
        active={false}
        unread={1}
        title="Channel"
        image="https://usepanda.com/img/source-icons/theNextWeb.png"
        excerpt="Excerpt here"
        public={false}
        private={false}
        muted={true}
        onArchivedClick={() => console.log('2')}
        onMutedClick={() => console.log('1')}
        onClick={() => console.log('3')}
      />
    </div>
  )))
  .add(
  'With a very long title',
  withInfo({ inline: true })(() => (
    <div style={{ width: 300, backgroundColor: '#0C1828' }}>
      <Channel
        active={false}
        unread={1}
        title="This is a very long title that a user won't be able to see"
        image="https://usepanda.com/img/source-icons/theNextWeb.png"
        excerpt="Excerpt here"
        public={false}
        private={false}
        muted={true}
        onArchivedClick={() => console.log('2')}
        onMutedClick={() => console.log('1')}
        onClick={() => console.log('3')}
      />
    </div>
  )))
  .add(
  'With badge & very long excerpt',
  withInfo({ inline: true })(() => (
    <div style={{ width: 300, backgroundColor: '#0C1828' }}>
      <Channel
        active={false}
        unread={1}
        title="Marketing Department"
        image="https://usepanda.com/img/source-icons/theNextWeb.png"
        excerpt="Excerpt here that is long is should wrap right off the screen"
        public={false}
        private={false}
        muted={true}
        archived={false}
        presence="away"
        onArchivedClick={() => console.log('2')}
        onMutedClick={() => console.log('1')}
        onClick={() => console.log('3')}
      />
    </div>
  )));
