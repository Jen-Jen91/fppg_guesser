import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

test("App snapshot test", () => {
  const tree = renderer.create(<App />).toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});
