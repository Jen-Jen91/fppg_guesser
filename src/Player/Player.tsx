import React from "react";

export interface PlayerProps {
  playerFirstName: string;
  playerLastName: string;
  url: string;
}

export default function Player(props: PlayerProps) {
  const { playerFirstName, playerLastName, url } = props;

  return (
    <div>
      <img src={url} alt={playerFirstName + " " + playerLastName} />
      <p>
        {playerFirstName} {playerLastName}
      </p>
    </div>
  );
}
