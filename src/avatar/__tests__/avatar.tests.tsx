import { shallow, mount, ReactWrapper } from "enzyme";
import * as React from "react";
import "../../../enzyme.setup";
import { Avatar } from "../index";

function hexToRgb(hex: string): string {
  var result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
  ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
  : `rgb(0, 0, 0)`;
}

describe("Renders correctly", () => {
  let el: any;

  beforeEach(() => {
    el = <Avatar title="Jon Doe" />
  });

  it("renders", () => {
    const wrapper = shallow(el);

    expect(wrapper.contains(el));
  });
});

describe("Dark themed", () => {
  let el: ReactWrapper;
  let component: any;
  const darkBackgroundHEX: string = "#222129";
  const darkBackgroundRGB: string = hexToRgb(darkBackgroundHEX);

  beforeEach(() => {
    component = <Avatar
      title="Jon Doe"
      dark={true}
    />
    el = mount(component);
  });

  it("to have a dark background", () => {
    const node: any = el.find('div').at(1).getDOMNode();
    const style = window.getComputedStyle(node);
    const backgroundColor = style['background-color'];
    
    expect(backgroundColor).toBe(darkBackgroundRGB);
  });
})
/* 
describe("Outline inner/outer color & text color", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        outlineInnerColor="red"
        outlineOuterColor="white"
        textColor="red"
      />
    );
  });

  it("...", () => {
    // const { width, height } = el.find('div').first().props()
  });
})

describe("With muted graphic", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
      title="Jon Doe"
      textColor="red"
      size="large"
      muted={true}
      presence="away"
      image="https://randomuser.me/api/portraits/men/62.jpg"
    />
    );
  });

  it("...", () => {
  });
})

describe("Coloring (auto)", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        color="#FC1449"
      />
    );
  });

  it("...", () => {
  });
})

describe("With a presence - invisible for other users", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        presence="invisible:user"
        onPresenceClick={() => console.log('Clicked')}
      />
    );
  });

  it("...", () => {
  });
})

describe("With a presence - online", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        presence="online"
      />
    );
  });

  it("...", () => {
  });
})

describe("With a presence - away", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        presence="away"
      />
    );
  });

  it("...", () => {
  });
})

describe("With a presence - offline", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        presence="offline"
      />
    );
  });

  it("...", () => {
  });
})

describe("Large sizing", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        size="large"
      />
    );
  });

  it("...", () => {
  });
})

describe("No image & click (default)", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        onClick={action('Clicked')}
        title="Jon Doe"
      />
    );
  });

  it("...", () => {
  });
})

describe("With image", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        title="Jon Doe"
        outlineInnerColor="black"
        outlineOuterColor="white"
        size="large"
        image="https://randomuser.me/api/portraits/men/62.jpg"
      />
    );
  });

  it("...", () => {
  });
})

describe("With delete", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        onDeleteClick={action('Delete #42')}
        deleteIcon={<span style={{ color: 'white', fontSize: 10 }}>x</span>}
        title="Jon Doe"
        size="large"
      />
    );
  });

  it("...", () => {
  });
})

describe("With edit", () => {
  let el: any;

  beforeEach(() => {
    el = mount(
      <Avatar
        onEditClick={action('Delete #42')}
        editIcon={<div style={{ color: '#00ABF0', fontSize: 20 }}>✎</div>}
        title="Jon Doe"
        size="large"
      />
    );
  });

  it("...", () => {
  });
})
 */
