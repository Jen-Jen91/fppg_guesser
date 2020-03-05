import React from "react";
import Player from "./Player";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

let playerClicked = jest.fn();

const player = (
  <Player
    playerFirstName="John"
    playerLastName="Doe"
    url=""
    fppg={48}
    clickPlayer={playerClicked}
    showFppg={false}
  />
);

describe("Player", () => {
  test("snapshot test", () => {
    const tree = renderer.create(player).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("calls clickPlayer when clicked", () => {
    const wrapper = mount(player);

    const div = wrapper.find(".player-container");
    div.simulate("click");

    expect(playerClicked).toBeCalledWith(48);
  });

  test("renders fppg text when true", () => {
    const wrapper = mount(
      <Player
        playerFirstName="John"
        playerLastName="Doe"
        url=""
        fppg={48}
        clickPlayer={playerClicked}
        showFppg={true}
      />
    );

    expect(wrapper.find(".fppg-text")).toHaveLength(1);
  });
});
