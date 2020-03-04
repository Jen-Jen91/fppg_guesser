import React from "react";
import End from "./End";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

describe("End", () => {
  test("snapshot test", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <End />
      </MemoryRouter>
    );

    expect(wrapper.render()).toMatchSnapshot();
  });
});
