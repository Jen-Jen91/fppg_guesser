import React from "react";
import App from "./App";
import Home from "./Home/Home";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

describe("App", () => {
  test("snapshot test", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("redirects to Home", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
