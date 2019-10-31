import { shallow } from "enzyme";
import * as React from "react";
import "../../../enzyme.setup";
import { Avatar } from "../index";

describe("Renders correctly", () => {
  it("renders", () => {
    const el = <Avatar title="Jon Doe" />;
    const wrapper = shallow(el);

    expect(wrapper.contains(el));
  });
  it("displays shorter titles", () => {
    const wrapper = shallow(<Avatar title="Jon Doe" />);

    expect(wrapper.find({ className: '.text' }));
  });
});
