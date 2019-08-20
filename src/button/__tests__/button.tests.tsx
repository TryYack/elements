import { shallow } from "enzyme";
import * as React from "react";
import "../../../enzyme.setup";
import { Button } from '../index';

describe('Displays button text', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Button
        text="Click Me"
      />
    )
    expect(wrapper.find('.inner').html()).toMatch(/Click Me/)
  });
});
