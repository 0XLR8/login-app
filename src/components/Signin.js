import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Signin = ({handleFlip, isSignIn}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const { handleLogin, handleSignup, alert, setAlert } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        isSignIn ? handleLogin({username, password, remember}) : handleSignup({username, password, remember});
    }

    const handleLowButton = () => {
        setAlert(false);
        setUsername("");
        setPassword("");
        setRemember(false);
        handleFlip();
    }

    const formatAlert = () => {
        return alert ? "block" : "none";
    }

    return(
        <div className={`box log-in ${isSignIn ? "signin" : "signup"}`}>
            <h2 className="text-center mb-4 mx-auto signin-title">{isSignIn ? "LOGIN" : "SIGNUP"}</h2>
            <p className="alert-text" style={{display: formatAlert()}} >{isSignIn ? "Username or password is not valid" : "Username is already registered"}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    required 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div className="d-flex flex-row justify-content-start align-items-center mb-3">
                    <input 
                        id={`${isSignIn}`}
                        type="checkbox" 
                        className="w-auto me-2 my-0" 
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                    <label htmlFor={`${isSignIn}`} className="text-muted">Remember me</label>
                </div>
                <button className="submit-btn mx-auto mb-5" type="submit">{isSignIn ? "LOGIN" : "SIGNUP"}</button>
            </form>
            <p className="text-muted text-center">{isSignIn ? "Not a member?" : "Already a member?"}<button onClick={handleLowButton} className="switch-btn">{isSignIn ? "SIGNUP instead" : "LOGIN instead"}</button></p>
        </div>
    )
}

export default Signin;