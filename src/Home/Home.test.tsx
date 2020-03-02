import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";

test("Home snapshot test", () => {
  const tree = renderer.create(<Home />).toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});
