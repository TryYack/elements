import { shallow } from "enzyme";
import * as React from "react";
import "../../../enzyme.setup";
import { Tooltip } from '../index';

describe('Displays tooltip text', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Toolip
        text="Click Me"
      />
    )
    expect(wrapper.find('.inner').html()).toMatch(/Click Me/)
  });
});
