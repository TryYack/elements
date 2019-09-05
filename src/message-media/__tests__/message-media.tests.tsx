import { shallow } from "enzyme";
import * as React from "react";
import "../../../enzyme.setup";
import { MessageMedia } from '../index';

describe('Displays titles', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MessageMedia
        title="Jon Doe"
      />
    )
    expect(wrapper.find('.text').html()).toMatch(/JD/)
  });
});
