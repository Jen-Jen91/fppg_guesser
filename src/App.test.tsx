import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home/Home";

test("App snapshot test", () => {
  const tree = renderer.create(<App />).toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});

test("redirect to Home", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});
