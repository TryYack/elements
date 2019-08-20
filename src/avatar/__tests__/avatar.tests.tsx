import { shallow } from "enzyme";
import * as React from "react";
import "../../../enzyme.setup";
import { Avatar } from '../index';

describe('Displays titles', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Avatar 
        title="Jon Doe"
      />
    )
    expect(wrapper.find('.text').html()).toMatch(/JD/)
  });
});
