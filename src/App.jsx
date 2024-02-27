import "./App.css";
import AllPlayers from "./components/AllPlayers";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import NewPlayer from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div id="container">
      <Navbar />
      <NewPlayer />
      <MainContainer />
    </div>
  );
}

export default App;
