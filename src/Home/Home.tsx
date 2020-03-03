import React, { useEffect, useState } from "react";
import { APIData, MainPlayerData } from "../Types";
import Player from "../Player/Player";

export default function Home() {
  const [allPlayers, setAllPlayers] = useState<MainPlayerData[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
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
    fetchPlayerData();
  }, []);

  useEffect(() => {
    if (showResults || allPlayers.length < 1) return;

    let uniqueIndices: number[] = [];
    for (let i = 0; i < 2; i++) {
      const random = Math.round(Math.random() * allPlayers.length);
      if (uniqueIndices.indexOf(random) === -1) uniqueIndices.push(random);
    }

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

    if (fppg >= playerOne.fppg && fppg >= playerTwo.fppg) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <main>
      <h1>Guess the player with the highest FanDuel Points Per Game (FPPG)</h1>

      {allPlayers.length && (
        <section className="players-container">
          <Player
            playerFirstName={playerOne.firstName}
            playerLastName={playerOne.lastName}
            url={playerOne.imageUrl}
            fppg={playerOne.fppg}
            clickPlayer={playerGuessed}
            clickDisabled={showResults}
            showFppg={showResults}
          />
          <Player
            playerFirstName={playerTwo.firstName}
            playerLastName={playerTwo.lastName}
            url={playerTwo.imageUrl}
            fppg={playerTwo.fppg}
            clickPlayer={playerGuessed}
            clickDisabled={showResults}
            showFppg={showResults}
          />
        </section>
      )}

      {showResults && (
        <div className="results-container">
          <p>{isCorrect ? "CORRECT! :)" : "WRONG! :("}</p>
          <button onClick={() => setShowResults(false)} className="next-button">
            NEXT
          </button>
        </div>
      )}
    </main>
  );
}
