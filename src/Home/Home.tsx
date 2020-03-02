import React, { useEffect, useState } from "react";
import { APIData, MainPlayerData } from "../Types";

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
          imageUrl: player.images.default.url
        };
        return data;
      });

      console.log("PLAYERS DATA: ", playersData);

      setAllPlayers(playersData);
    } catch (e) {
      console.error(e);
    }
  }

  console.log("PLAYER DATA: ", allPlayers);

  return (
    <ul>
      {allPlayers.map((player, index) => (
        <li key={index}>
          {player.firstName} {player.lastName}
        </li>
      ))}
    </ul>
  );
}
