import React from "react";
import Modal from "./Modal";
import renderer from "react-test-renderer";

test("Modal snapshot test", () => {
  const tree = renderer.create(<Modal children />).toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});
