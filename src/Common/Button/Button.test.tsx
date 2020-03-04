import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("Button", () => {
  test("snapshot test", () => {
    const tree = renderer
      .create(<Button handleClick={() => console.log("Click")} children />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("calls handleClick function", () => {
    const buttonClicked = jest.fn();
    const wrapper = mount(<Button handleClick={buttonClicked} children />);

    const div = wrapper.find(".button");
    div.simulate("click");

    expect(buttonClicked).toBeCalled();
  });
});
