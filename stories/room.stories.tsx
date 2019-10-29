import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Room } from "../src/room";
import { withInfo } from "@storybook/addon-info";

storiesOf('Room', module)
  .add(
  'Default',
  withInfo({ inline: true })(() => (
    <div style={{ width: '100%', backgroundColor: '#0C1828' }}>
      <Room
        active={false}
        unread={1}
        title="Room"
        image="https://usepanda.com/img/source-icons/theNextWeb.png"
        excerpt="Excerpt here"
        public={false}
        private={false}
      />
    </div>
  )))
  .add(
  'With badge & very long excerpt',
  withInfo({ inline: true })(() => (
    <div style={{ width: 300, backgroundColor: '#0C1828' }}>
      <Room
        heartbeat={new Date()}
        active={false}
        muted={true}
        unread={1}
        title="Room"
        image="https://usepanda.com/img/source-icons/theNextWeb.png"
        excerpt="Excerpt here that is long is should wrap right off the screen"
        public={false}
        private={false}
        onArchivedClick={() => console.log('Archive')}
        onMutedClick={() => console.log('Mute')}
      />
    </div>
  )));
