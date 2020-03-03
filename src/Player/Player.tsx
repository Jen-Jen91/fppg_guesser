import React from "react";

export function roundOffPoints(points: number) {
  return points.toFixed(2);
}

export interface PlayerProps {
  playerFirstName: string;
  playerLastName: string;
  url: string;
  fppg: number;
  clickPlayer: (fppg: number) => void;
  clickDisabled: boolean;
  showFppg: boolean;
}

export default function Player(props: PlayerProps) {
  const {
    playerFirstName,
    playerLastName,
    url,
    fppg,
    clickPlayer,
    clickDisabled,
    showFppg
  } = props;

  console.log("CLICK IS DISABLED?: ", clickDisabled);

  return (
    <div onClick={() => clickPlayer(fppg)} className="player-container">
      <img src={url} alt={playerFirstName + " " + playerLastName} />
      <p>
        {playerFirstName} {playerLastName}
      </p>
      {showFppg && <p className="fppg-text">{roundOffPoints(fppg)}</p>}
    </div>
  );
}
