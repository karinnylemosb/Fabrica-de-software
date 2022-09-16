import { Link } from "react-router-dom";
import ChuckNorris from "./chuckNorris";
import DadJoke from "./dadJoke";


function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/dadJoke">Home Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;