import React from "react";

export interface PlayerProps {
  playerFirstName: string;
  playerLastName: string;
  url: string;
  fppg: number;
  clickPlayer: (fppg: number) => void;
}

export default function Player(props: PlayerProps) {
  const { playerFirstName, playerLastName, url, fppg, clickPlayer } = props;

  return (
    <div onClick={() => clickPlayer(fppg)} className="player-container">
      <img src={url} alt={playerFirstName + " " + playerLastName} />
      <p>
        {playerFirstName} {playerLastName}
      </p>
    </div>
  );
}
