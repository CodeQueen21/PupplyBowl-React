const cohortName = "2308-ACC-ET-WEB-PT-B";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const PLAYERS = `${APIURL}players`;

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(PLAYERS);
    if (!response.ok) {
      console.log("API error", response.status);
      return;
    }
    const jsonResponse = await response.json();
    const results = jsonResponse.data;
    let players = results.players;
    return players;
  } catch (error) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${PLAYERS}/${playerId}`);
    if (!response.ok) {
      console.log("API error", response.status);
      return;
    }
    const jsonResponse = await response.json();
    const results = jsonResponse.data;
    return results.player;
  } catch (error) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

export { fetchAllPlayers, fetchSinglePlayer };
