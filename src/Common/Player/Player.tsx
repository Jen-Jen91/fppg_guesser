import React from "react";
import { roundOffPoints } from "../helpers";
import "./Player.scss";

export interface PlayerProps {
  playerFirstName: string;
  playerLastName: string;
  url: string;
  fppg: number;
  showFppg: boolean;
  clickPlayer: (fppg: number) => void;
}

const Player = (props: PlayerProps) => {
  const {
    playerFirstName,
    playerLastName,
    url,
    fppg,
    showFppg,
    clickPlayer
  } = props;

  return (
    <div onClick={() => clickPlayer(fppg)} className="player-container">
      <img
        src={url}
        alt={playerFirstName + " " + playerLastName}
        width={300}
        height={300}
      />

      <p className="name-text">
        {playerFirstName} {playerLastName}
      </p>

      {showFppg && <p className="fppg-text">Fppg: {roundOffPoints(fppg)}</p>}
    </div>
  );
};

export default Player;
