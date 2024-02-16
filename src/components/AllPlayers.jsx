import { useEffect, useState } from "react";
import fetchAllPlayers from "../ajaxHelpers";
import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlayers() {
      setPlayers(await fetchAllPlayers());
    }

    fetchPlayers();
  }, []);
  console.log(players);
  return (
    <div id="all-players">
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <img src={player.imageUrl} />
            <p>Status: {player.status}</p>
            <button onclick={() => navigate("/SinglePlayer")}>Details</button>
          </div>
        );
      })}
    </div>
  );
}
