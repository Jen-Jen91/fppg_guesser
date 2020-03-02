import React from "react";
import Player from "./Player";
import renderer from "react-test-renderer";

test("Player snapshot test", () => {
  const tree = renderer
    .create(<Player playerFirstName="John" playerLastName="Doe" url="" />)
    .toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});
