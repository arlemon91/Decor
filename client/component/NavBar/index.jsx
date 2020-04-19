mport React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="App">
        <h1> Decor Showroom</h1>
        <Link to={"./decors"}>
          <button variant="raised">Home</button>
        </Link>

        <Link to={"./create"}>
          <button variant="raised">Create Room</button>
        </Link>

        <Link to={"./update"}>
          <button variant="raised">Update Room</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
