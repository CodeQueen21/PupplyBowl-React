import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link path="/">Home</Link>
      <Link path="/players/:id">Player Details</Link>
    </div>
  );
}
