import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";
// import { render } from "react-dom";
// import { shallow, mount } from "enzyme";

// const fakeResponse = [
//   {
//     first_name: "John",
//     fixture: {
//       _members: [],
//       _ref: ""
//     },
//     fppg: 48,
//     id: "",
//     images: {
//       default: {
//         height: 200,
//         url: "url",
//         width: 200
//       }
//     },
//     injured: false,
//     injury_details: "",
//     injury_status: "",
//     last_name: "Doe",
//     news: {
//       latest: ""
//     },
//     played: 1,
//     player_card_url: "",
//     position: "",
//     removed: false,
//     salary: 20000,
//     starting_order: "",
//     team: {
//       _members: [],
//       _ref: ""
//     }
//   }
// ];

test("Home snapshot test", () => {
  const tree = renderer.create(<Home />).toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});
