import React from "react";
import Player from "./Player";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

test("Player snapshot test", () => {
  const tree = renderer
    .create(
      <Player
        playerFirstName="John"
        playerLastName="Doe"
        url=""
        fppg={48}
        clickPlayer={() => console.log("Click")}
        clickDisabled={false}
        showFppg={false}
      />
    )
    .toJSON();
  console.log("TREE: ", tree);
  expect(tree).toMatchSnapshot();
});

test("Player renders fppg when true", () => {
  const wrapper = mount(
    <Player
      playerFirstName="John"
      playerLastName="Doe"
      url=""
      fppg={48}
      clickPlayer={() => console.log("Click")}
      clickDisabled={false}
      showFppg={true}
    />
  );

  expect(wrapper.find(".fppg-text")).toHaveLength(1);
});

// TODO: Test click disabled

test("Player calls clickPlayer when clicked", () => {
  const playerClicked = jest.fn();
  const wrapper = mount(
    <Player
      playerFirstName="John"
      playerLastName="Doe"
      url=""
      fppg={48}
      clickPlayer={playerClicked}
      clickDisabled={false}
      showFppg={false}
    />
  );

  const div = wrapper.find(".player-container");
  div.simulate("click");
  expect(playerClicked).toBeCalledWith(48);
});
