import { Link } from "react-router-dom";
import '../styles/navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Smart Ai Task Manager</div>
        <ul className="nav-links">
            <li> <Link to="/">Tasks</Link> </li>
            <li> <Link to="/add">Add Task</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar;
