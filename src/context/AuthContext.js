import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(false);
    const [users, setUsers] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem("login-app-user");
        if(storedData !== null){
            setAuth(true);
            setLoggedUser(JSON.parse(storedData));
        }

        const fetchUsers = async () => {
            const res = await fetch("http://localhost:5000/users");
            if(res.ok){
                const data = await res.json();
                setUsers(data);
            }
        }
        fetchUsers();
    }, [auth])

    const rememberUser = (isRemember, user) => {
        if(isRemember){
            let data = localStorage.getItem("login-app-user");
            data === null && localStorage.setItem("login-app-user", JSON.stringify(user));
        }
    }

    const handleLogin = (user) => {
        const loggedUser = users.find((value) => {
            return user.username === value.username && user.password === value.password
        })
        if(loggedUser !== undefined){
            rememberUser(user.remember, user);
            setAlert(false);
            setLoggedUser(loggedUser);
            setAuth(true);
        }else{
            setAlert(true);
        }
    }

    const handleSignup = async (user) => {
        const signedUser = users.find((value) => {
            return user.username === value.username
        })
        if(signedUser === undefined){
            rememberUser(user.remember, user);
            setAlert(false);
            const {remember, ...rest} = user;
            const res = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",   
                },
                body: JSON.stringify(rest)
            })
            if(res.ok){
                setLoggedUser(user);
                setAuth(true);
            }
        }else{
            setAlert(true)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("login-app-user");
        setLoggedUser(null);
        setAuth(false);
    }

    return(
        <AuthContext.Provider value={{
            auth,
            loggedUser,
            users,
            alert,
            setAlert,
            handleLogin,
            handleSignup,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;