import { useEffect, useState } from "react";
import fetchAllPlayers from "../ajaxHelpers";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      setPlayers(await fetchAllPlayers());
    }

    fetchPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <img src={player.imageUrl} />
            <p>Status: {player.status}</p>
          </div>
        );
      })}
    </div>
  );
}
