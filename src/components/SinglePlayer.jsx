import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../ajaxHelpers";

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchPlayer() {
      try {
        const result = await fetchSinglePlayer(id);
        setPlayer(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlayer();
  }, []);
  return (
    <div>
      {player && (
        <div>
          <h4>{player.name}</h4>
          <img src={player.imageUrl} />
          <p>Status: {player.status}</p>
          <p>Breed: {player.breed}</p>
          <p>Cohort: {player.cohortId}</p>
          <p>Team: {player.teamId}</p>
        </div>
      )}
    </div>
  );
}
