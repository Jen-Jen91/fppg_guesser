import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

test("Button snapshot test", () => {
  const tree = renderer
    .create(<Button handleClick={() => console.log("Click")} children />)
    .toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});

test("Button calls handleClick function", () => {
  const buttonClicked = jest.fn();
  const wrapper = mount(<Button handleClick={buttonClicked} children />);

  const div = wrapper.find(".button");
  div.simulate("click");
  expect(buttonClicked).toBeCalled();
});
