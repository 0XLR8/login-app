import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Users = () => {

    const { users } = useContext(AuthContext);
    
    return(
        <div className="box users">
            <h2 className="mx-auto mb-4">Users</h2>
            <ul className="user-list mx-4">
                {
                    users && users.map((value, index) => {
                        return <li key={value.id}>{index + 1}. {value.username}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users;