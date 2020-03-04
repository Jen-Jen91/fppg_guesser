import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  test("snapshot test", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(wrapper.render()).toMatchSnapshot();
  });
});
