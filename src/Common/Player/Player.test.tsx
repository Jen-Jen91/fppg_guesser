import React from "react";
import Player from "./Player";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

let playerClicked = jest.fn();

describe("Player", () => {
  test("snapshot test", () => {
    const tree = renderer
      .create(
        <Player
          playerFirstName="John"
          playerLastName="Doe"
          url=""
          fppg={48}
          clickPlayer={playerClicked}
          showFppg={false}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
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

  test("calls clickPlayer when clicked", () => {
    const wrapper = mount(
      <Player
        playerFirstName="John"
        playerLastName="Doe"
        url=""
        fppg={48}
        clickPlayer={playerClicked}
        showFppg={false}
      />
    );

    const div = wrapper.find(".player-container");
    div.simulate("click");

    expect(playerClicked).toBeCalledWith(48);
  });
});
