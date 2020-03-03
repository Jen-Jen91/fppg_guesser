import React, { useEffect, useState } from "react";
import { APIData, MainPlayerData } from "../Types";
import Player from "../Player/Player";

export default function Home() {
  const [allPlayers, setAllPlayers] = useState<MainPlayerData[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [playerOne, setPlayerOne] = useState<MainPlayerData>({
    firstName: "",
    lastName: "",
    imageUrl: "",
    fppg: 0
  });
  const [playerTwo, setPlayerTwo] = useState<MainPlayerData>({
    firstName: "",
    lastName: "",
    imageUrl: "",
    fppg: 0
  });

  useEffect(() => {
    console.log("HOME USE EFFECT");

    fetchPlayerData();
  }, []);

  useEffect(() => {
    console.log("GET RANDOM PLAYERS: ", allPlayers);
    if (showResults || allPlayers.length < 1) return;

    console.log("GET RANDOM PLAYERS: ", allPlayers);

    let uniqueIndices: number[] = [];
    for (let i = 0; i < 2; i++) {
      const random = Math.round(Math.random() * allPlayers.length);
      if (uniqueIndices.indexOf(random) === -1) uniqueIndices.push(random);
    }

    console.log("UNIQUE INDICES: ", uniqueIndices);

    setPlayerOne(allPlayers[uniqueIndices[0]]);
    setPlayerTwo(allPlayers[uniqueIndices[1]]);
  }, [allPlayers, showResults]);

  async function fetchPlayerData() {
    try {
      const resp = await fetch(
        "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
      );
      const allData: APIData = await resp.json();

      const playersData: MainPlayerData[] = allData.players.map(player => {
        const data = {
          firstName: player.first_name,
          lastName: player.last_name,
          imageUrl: player.images.default.url,
          fppg: player.fppg
        };
        return data;
      });

      setAllPlayers(playersData);
    } catch (e) {
      console.error(e);
    }
  }

  function playerGuessed(fppg: number) {
    setShowResults(true);
    console.log("FPPG: ", fppg);
  }

  return (
    <main>
      <h1>Guess the player with the highest FanDuel Points Per Game (FPPG)</h1>

      {allPlayers.length && (
        <section>
          <Player
            playerFirstName={playerOne.firstName}
            playerLastName={playerOne.lastName}
            url={playerOne.imageUrl}
            fppg={playerOne.fppg}
            clickPlayer={playerGuessed}
          />
          <Player
            playerFirstName={playerTwo.firstName}
            playerLastName={playerTwo.lastName}
            url={playerTwo.imageUrl}
            fppg={playerTwo.fppg}
            clickPlayer={playerGuessed}
          />
        </section>
      )}

      {showResults && (
        <div>
          <p>CORRECT or INCORRECT</p>
          <button onClick={() => setShowResults(false)} className="next-button">
            NEXT
          </button>
        </div>
      )}
    </main>
  );
}
