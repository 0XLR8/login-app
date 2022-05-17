import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ReactCardFlip from 'react-card-flip';
import Signin from "../components/Signin";

const LogIn = () => {

    const [pageLoad, setPageLoad] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const { auth } = useContext(AuthContext);
    const location = useNavigate();

    useEffect(() => {
        setPageLoad(true)
        auth && location("/")
    }, [auth])

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        pageLoad &&
            <ReactCardFlip isFlipped={isFlipped} >
                <Signin isSignIn={true} handleFlip={handleFlip} />
                <Signin isSignIn={false} handleFlip={handleFlip} />
            </ReactCardFlip>
    )
}

export default LogIn;