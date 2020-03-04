import React, { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { APIData, MainPlayerData } from "../Common/Types";
import Player from "../Common/Player/Player";
import Button from "../Common/Button/Button";
import Modal from "../Common/Modal/Modal";
import "./Home.scss";

export interface ExtendedProps extends RouteComponentProps {}

const Home = (props: ExtendedProps) => {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [allPlayers, setAllPlayers] = useState<MainPlayerData[]>([]);

  const player: MainPlayerData = {
    firstName: "",
    lastName: "",
    imageUrl: "",
    fppg: 0
  };

  const [playerOne, setPlayerOne] = useState<MainPlayerData>(player);
  const [playerTwo, setPlayerTwo] = useState<MainPlayerData>(player);

  useEffect(() => {
    fetchPlayerData();
  }, []);

  useEffect(() => {
    if (showResults || allPlayers.length <= 1) return;

    let uniqueIndices: number[] = [];

    if (allPlayers.length === 2) {
      uniqueIndices = [0, 1];
    } else {
      let i = uniqueIndices.length;

      while (i < 2) {
        const max = allPlayers.length - 1;
        const random = Math.round(Math.random() * max);

        if (!uniqueIndices.includes(random)) {
          uniqueIndices.push(random);
          i++;
        }
      }
    }

    setPlayerOne(allPlayers[uniqueIndices[0]]);
    setPlayerTwo(allPlayers[uniqueIndices[1]]);
  }, [allPlayers, showResults]);

  const fetchPlayerData = async () => {
    try {
      const resp = await fetch(
        "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
      );
      const allData: APIData = await resp.json();

      const playersData: MainPlayerData[] = allData.players.map(player => {
        const data: MainPlayerData = {
          firstName: player.first_name || "",
          lastName: player.last_name || "",
          imageUrl: player.images.default.url || "",
          fppg: player.fppg || 0
        };
        return data;
      });

      setAllPlayers(playersData);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const playerGuessed = (fppg: number) => {
    setShowResults(true);

    if (fppg >= playerOne.fppg && fppg >= playerTwo.fppg) {
      setIsCorrect(true);
      updateScore();
    } else {
      setIsCorrect(false);
    }
  };

  const updateScore = () => {
    if (score === 9) {
      setScore(score + 1);
      props.history.push("/end");
    } else {
      setScore(score + 1);
    }
  };

  return (
    <main className="home-container">
      <h1 className="title">
        Guess the player with the highest FanDuel Points Per Game (FPPG)
      </h1>

      <h3 className="score">Score: {score}</h3>

      {loading || allPlayers.length === 0 ? (
        <div className="loader" />
      ) : (
        <section className="players-container">
          <Player
            playerFirstName={playerOne.firstName}
            playerLastName={playerOne.lastName}
            url={playerOne.imageUrl}
            fppg={playerOne.fppg}
            clickPlayer={playerGuessed}
            showFppg={showResults}
          />

          <Player
            playerFirstName={playerTwo.firstName}
            playerLastName={playerTwo.lastName}
            url={playerTwo.imageUrl}
            fppg={playerTwo.fppg}
            clickPlayer={playerGuessed}
            showFppg={showResults}
          />
        </section>
      )}

      {showResults && (
        <Modal>
          <div className="results-container">
            <p className="results-text">{isCorrect ? "Correct!" : "Wrong!"}</p>
            <Button handleClick={() => setShowResults(false)}>
              <p className="next-text">Next</p>
            </Button>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default withRouter(Home);
