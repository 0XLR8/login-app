import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = () => {

    const { loggedUser } = useContext(AuthContext);

    return(
        <div className="home ms-5">
            <h1 className="mb-3">Welcome <b>{loggedUser.username}</b></h1>
            <p>This is your home page.</p>
        </div>
    )
}

export default Home;