import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {

    const { auth, handleLogout } = useContext(AuthContext);

    return(
        <div className="nav-bar mb-5 d-flex justify-content-between align-items-center">
            <h1>A Typical Page</h1>
            {
                auth && 
                    <div className="nav-links">
                        <Link className="nav-item" to="/" >Home</Link>
                        <Link className="nav-item" to="/users" >Users</Link>
                        <button className="nav-item logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
            }
        </div>
    )
}

export default Navbar;