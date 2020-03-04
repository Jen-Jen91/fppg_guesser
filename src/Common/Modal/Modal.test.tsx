import React from "react";
import Modal from "./Modal";
import renderer from "react-test-renderer";

describe("Modal", () => {
  test("snapshot test", () => {
    const tree = renderer.create(<Modal children />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
