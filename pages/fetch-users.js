import React, {useState} from "react";
import axios from "axios";



export default function FetchUsers() {
    const [users, setUser ] = useState([ ])
    function fetchUsersData () {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res.data)
            console.log("users", users)
            setUser(res.data);
        })
    }
    let content = "content"
    return(
        <>
        {/* <p>Users: {JSON.stringify(users)}  </p> */}
            <button onClick={fetchUsersData}>Fetch-Users</button>
            <hr/>
            <table>
                <thead>
                    <th>Name</th>
                    <th>email</th>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}