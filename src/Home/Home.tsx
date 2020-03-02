import React, { useEffect, useState } from "react";
import { APIData, MainPlayerData } from "../Types";
import Player from "../Player/Player";

export default function Home() {
  const [allPlayers, setAllPlayers] = useState<MainPlayerData[]>([]);

  useEffect(() => {
    fetchPlayerData();
  }, []);

  async function fetchPlayerData() {
    try {
      const resp = await fetch(
        "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
      );
      const allData: APIData = await resp.json();

      console.log("ALL DATA: ", allData);

      const playersData: MainPlayerData[] = allData.players.map(player => {
        const data = {
          firstName: player.first_name,
          lastName: player.last_name,
          imageUrl: player.images.default.url,
          fppg: player.fppg
        };
        return data;
      });

      console.log("PLAYERS DATA: ", playersData);

      setAllPlayers(playersData);
    } catch (e) {
      console.error(e);
    }
  }

  function renderTwoPlayers() {
    let uniqueIndices: number[] = [];
    for (let i = 0; i < 2; i++) {
      const random = Math.round(Math.random() * allPlayers.length);
      if (uniqueIndices.indexOf(random) === -1) uniqueIndices.push(random);
    }

    const playerOne = allPlayers[uniqueIndices[0]];
    const playerTwo = allPlayers[uniqueIndices[1]];

    return (
      <section>
        <Player
          playerFirstName={playerOne.firstName}
          playerLastName={playerOne.lastName}
          url={playerOne.imageUrl}
          fppg={playerOne.fppg}
          clickPlayer={fppg => console.log(fppg)}
        />
        <Player
          playerFirstName={playerTwo.firstName}
          playerLastName={playerTwo.lastName}
          url={playerTwo.imageUrl}
          fppg={playerTwo.fppg}
          clickPlayer={fppg => console.log(fppg)}
        />
      </section>
    );
  }

  console.log("PLAYER DATA: ", allPlayers);

  return (
    <main>
      <h1>Guess the player with the highest FanDuel Points Per Game (FPPG)</h1>

      {allPlayers.length && renderTwoPlayers()}
    </main>
  );
}
