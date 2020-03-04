import React from "react";
import "./Player.scss";

export function roundOffPoints(points: number) {
  return points.toFixed(2);
}

export interface PlayerProps {
  playerFirstName: string;
  playerLastName: string;
  url: string;
  fppg: number;
  showFppg: boolean;
  clickPlayer: (fppg: number) => void;
}

export default function Player(props: PlayerProps) {
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
      <p className="name">
        {playerFirstName} {playerLastName}
      </p>
      {showFppg && <p className="fppg-text">Fppg: {roundOffPoints(fppg)}</p>}
    </div>
  );
}
