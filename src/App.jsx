import "./App.css";
import AllPlayers from "./components/AllPlayers";
import Navbar from "./components/Navbar";
import NewPlayer from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div>
      <Navbar />
      <NewPlayer />
      <AllPlayers />
      <SinglePlayer />
    </div>
  );
}

export default App;
