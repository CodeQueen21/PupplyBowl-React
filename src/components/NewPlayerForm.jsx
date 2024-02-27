export default function NewPlayer() {
  return (
    <div id="player-form">
      <h2>Create a new player!</h2>
      <form>
        <label>
          Player Name:
          <input type="text" name="playerName" id="playerName"></input>
        </label>
        <label>
          Player Breed:
          <input type="text" name="playerBreed" id="playerBreed"></input>
        </label>
        <label>
          Status:
          <select value="bench">
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </label>
        <label>
          Add Image:
          <input type="text" name="playerImage" id="playerImage"></input>
        </label>
        <button type="submit" id="submit">
          Add Player
        </button>
      </form>
    </div>
  );
}
